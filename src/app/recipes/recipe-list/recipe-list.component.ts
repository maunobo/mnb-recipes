import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // recipeTest = {title: "placeholderTitle", description: "placeholderDescription",  imagePath: "placeholderImage"};
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
  ];

  constructor() {}

  createNewRecipe(title: string, description: string, imagePath: string) {
    console.log(title, description, imagePath);
    return new Recipe(title, description, imagePath);
  }

  ngOnInit(): void {}
}
