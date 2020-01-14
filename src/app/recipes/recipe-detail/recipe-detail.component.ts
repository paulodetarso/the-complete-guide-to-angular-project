import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from '../service/recipe.service';

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

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
