import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  // The param's name, the same that will be found in the URL
  private readonly PARAM_ID = 'id';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((params: Params) => {
        this.id = +params[this.PARAM_ID];
        this.editMode = (this.id !== null && this.id !== undefined);
      });
  }
}
