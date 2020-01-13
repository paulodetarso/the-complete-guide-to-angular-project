import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
