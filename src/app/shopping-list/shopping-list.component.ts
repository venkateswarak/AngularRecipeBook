import { Component, OnInit } from '@angular/core';
import {Ingredients} from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[] = [
  new Ingredients('Apple', 5),
  new Ingredients('Pineapple', 6),
];

  constructor() { }

  ngOnInit() {
  }

}
