import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  index: number;

  @Input()
  recipe: Recipe;

}
