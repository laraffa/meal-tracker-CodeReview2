import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <ul><li>{{ meal.food }}</li></ul>
  `
})
export class MealComponent {
  public meal: Meal;

}
