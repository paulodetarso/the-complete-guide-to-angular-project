import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  private readonly API_URL = 'https://complete-guide-to-angular.firebaseio.com';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
  ) { }

  /**
   * @description In this case, as we are not interested on the response after calling the API, we just subscribe
   * without return any value (the subscription is necessary because, without subscribe, the HTTP request won't be
   * executed. This is valid for *any* HTTP request!)
   */
  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(`${this.API_URL}/recipes.json`, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(`${this.API_URL}/recipes.json`)
      .pipe(
        map((recipes: Recipe[]) => {

          if (recipes === null || recipes === undefined) {
            return;
          }

          return recipes.map((recipe: Recipe) => {
            return {
              ...recipe,
              ingredients: (recipe.ingredients && recipe.ingredients.length) ? recipe.ingredients : []
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
