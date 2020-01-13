import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Summer Colors',
      'Delicious and rich on vitamins',
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ),
    new Recipe(
      'Nuts and Yogurt',
      'Simple and easy to prepare',
      'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ),
  ];

  /**
   * @description Returns a "copy" of list of recipes, not the reference to the original property (using the slice)
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
