import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Recipe } from '../shared/model/recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [
    RecipeService,
  ]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;

  private subscriptions = new Subscription();

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.recipeService
        .recipeSelected
        .subscribe((recipe: Recipe) => this.selectedRecipe = recipe)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
