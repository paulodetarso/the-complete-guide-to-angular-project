import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import { Recipe } from '../../shared/model/recipe.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  private recipes: Recipe[] = [
    {
      name: 'Summer Colors',
      description: 'Delicious and rich on vitamins',
      imagePath: './assets/images/recipe-001.jpeg',
      ingredients: [
        { name: 'Carrots', amount: 5 },
        { name: 'Potatoes', amount: 10 },
      ]
    },
    {
      name: 'Nuts and Yogurt',
      description: 'Simple and easy to prepare',
      imagePath: './assets/images/recipe-002.jpeg',
      ingredients: [
        { name: 'Nuts', amount: 20 },
        { name: 'Spinach', amount: 7 },
      ]
    },
  ];

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  /**
   * @description Returns a "copy" of list of recipes, not the reference to the original property (using the slice)
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
