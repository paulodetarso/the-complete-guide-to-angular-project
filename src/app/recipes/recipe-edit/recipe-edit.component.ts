import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../shared/service/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;

  id: number;
  editMode = false;

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
      .subscribe((params: Params) => {
        this.id = +params[this.PARAM_ID];
        this.editMode = (this.id !== null && this.id !== undefined);

        this.initForm();
      });
  }

  private initForm(): void {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(
                ingredient.name,
                Validators.required
              ),
              amount: new FormControl(
                ingredient.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  get ingredientControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit(): void {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onAddIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(
          null,
          Validators.required
        ),
        amount: new FormControl(
          null,
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
        )
      })
    );
  }

  onDeleteIngredient(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
