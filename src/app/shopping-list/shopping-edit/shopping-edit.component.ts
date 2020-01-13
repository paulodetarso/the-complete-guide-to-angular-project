import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  @ViewChild('inputName', { static: false })
  inputName: ElementRef;

  @ViewChild('inputAmount', { static: false })
  inputAmount: ElementRef;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(): void {
    this.ingredientAdded.emit({
      name: this.inputName.nativeElement.value,
      amount: this.inputAmount.nativeElement.value,
    });
  }

  onDeleteItem(): void {

  }

  onClear(): void {

  }
}
