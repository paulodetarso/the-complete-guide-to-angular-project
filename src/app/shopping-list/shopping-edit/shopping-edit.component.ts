import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  @ViewChild('inputName', { static: false })
  inputName: ElementRef;

  @ViewChild('inputAmount', { static: false })
  inputAmount: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  private resetForm(): void {
    this.inputName.nativeElement.value = '';
    this.inputAmount.nativeElement.value = '';
  }

  onAddItem(): void {
    const nameFromInput = this.inputName.nativeElement.value;
    const amountFromInput = this.inputAmount.nativeElement.value;

    if (!nameFromInput || !amountFromInput) {
      return;
    }

    const ingredient = {
      name: nameFromInput,
      amount: amountFromInput
    };

    this.shoppingListService.addIngredient(ingredient);
    this.resetForm();
    this.inputName.nativeElement.focus();
  }

  onDeleteItem(): void {

  }

  onClear(): void {

  }
}
