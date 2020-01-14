import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../../shared/service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', { static: false })
  form: NgForm;

  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  private subscriptions = new Subscription();

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.shoppingListService
        .startedEditing
        .subscribe((index: number) => {

          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);

          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });

        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit(form: NgForm): void {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onDeleteItem(): void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear(): void {
    this.editMode = false;
    this.form.reset();
  }
}
