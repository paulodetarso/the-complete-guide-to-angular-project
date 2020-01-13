import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {

  @Input()
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
  ) { }

  onAddIngredientsToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
