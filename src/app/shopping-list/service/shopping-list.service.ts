import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  /**
   * @description Returns a "copy" of list of ingredients, not the reference to the original property (using the slice)
   */
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }
}
