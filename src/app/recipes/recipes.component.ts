import { Component } from '@angular/core';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [
    RecipeService,
  ]
})
export class RecipesComponent {

}
