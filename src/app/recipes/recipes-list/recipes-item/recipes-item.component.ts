import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  imClicked() {
  this.recipeService.selectedRecipe.emit(this.recipe);

  }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }



}
