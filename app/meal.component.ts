import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <h3>{{ meal.mealName + " "}}<br>{{ meal.description }}<br>{{ meal.calories + " " + "calories"}} </h3>


  `
})
export class MealComponent {
  public meal: Meal;

  // minusPint(selectedMeal: Meal){
  //   this.meal.pints -= 1;
  // }
}
