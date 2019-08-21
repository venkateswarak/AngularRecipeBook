import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe;



  constructor(private recipeService: RecipeService) { }

ngOnInit() {
  this.recipeService.selectedRecipe.subscribe(
    (recipe: Recipe) => this.clickedRecipe = recipe
    );
  }


}
