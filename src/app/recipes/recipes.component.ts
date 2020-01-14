import { Component } from '@angular/core';
import { RecipeService } from '../shared/service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [
    RecipeService,
  ]
})
export class RecipesComponent {

}
