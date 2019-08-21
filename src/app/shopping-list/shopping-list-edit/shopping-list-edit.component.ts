import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput', {static: true}) nameInput: ElementRef;
@ViewChild('amountInput', {static: true}) amountInput: ElementRef;


constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  ingredientAdd() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = +this.amountInput.nativeElement.value;
    const newIng = new Ingredients(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIng);
  }
  ingredientDel() {
    this.shoppingListService.ingDelete();

  }
}
