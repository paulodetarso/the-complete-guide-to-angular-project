import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
