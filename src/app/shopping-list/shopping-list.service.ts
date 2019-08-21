import { Ingredients } from '../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  latestIngredients = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Pineapple', 6),
  ];

getIngredients() {
return this.ingredients.slice();
}

addRecipeIngredients(ingredients: Ingredients[]) {
  this.ingredients.push(...ingredients);
  this.latestIngredients.emit(this.ingredients.slice());
}

addIngredient(ingredient: Ingredients) {
  this.ingredients.push(ingredient);
  this.latestIngredients.emit(this.ingredients.slice());
}

ingDelete() {
  this.ingredients.splice(0, 1);
  this.latestIngredients.emit(this.ingredients.slice());
}


}
