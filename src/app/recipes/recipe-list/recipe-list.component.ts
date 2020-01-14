import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from '../../shared/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];

  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.recipeService
        .recipesChanged
        .subscribe((recipes: Recipe[]) => this.recipes = recipes)
    );

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
