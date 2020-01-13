import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];

  private subscriptions = new Subscription();

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.getIngredients();

    this.subscriptions.add(
      this.shoppingListService
        .ingredientAdded
        .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getIngredients(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
