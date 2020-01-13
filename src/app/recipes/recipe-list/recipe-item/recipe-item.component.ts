import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  onSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
