import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from '../../shared/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;

  // The param's name, the same that will be found in the URL
  private readonly PARAM_ID = 'id';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(
        (params: Params) => {
          this.id = +params[this.PARAM_ID];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
