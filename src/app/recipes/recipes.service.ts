import { EventEmitter, Injectable } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';


export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredients('Buns', 2),
        new Ingredients('Meat', 1)
      ])
   ];
getrecipes() {
  return this.recipes.slice();
}

}
