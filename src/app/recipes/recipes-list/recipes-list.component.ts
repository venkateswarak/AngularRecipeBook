import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() clickedEl = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Some Test Description',
    'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg'),

    new Recipe('Recipe 2', 'This is another description.',
    // tslint:disable-next-line: max-line-length
    'https://assets.epicurious.com/photos/5ced8262deca6f5f8bc788e6/16:9/w_400%2Cc_limit/Country-Style-Ribs-with-Quick-Pickled-Watermelon-recipe-22102019.jpg')
  ];
  elClicked(recipe: Recipe) {
    this.clickedEl.emit(recipe);

  }
  constructor() { }

  ngOnInit() {
  }

}
