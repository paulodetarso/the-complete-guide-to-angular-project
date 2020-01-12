import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      'Summer Colors',
      'Delicious and rich on vitamins',
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ),
    new Recipe(
      'Nuts and Yogurt',
      'Simple and easy to prepare',
      'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ),
  ];

}
