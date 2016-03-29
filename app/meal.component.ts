import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <h3 (click)= "select()">{{ meal.mealName }} </h3>
    <div *ngIf="hiddenDetail">
    <p>{{ meal.description }}</p>
    <p>{{ meal.calories }} </p>
    </div>


  `
})
export class MealComponent {
  public meal: Meal;
  public hiddenDetail: boolean= false;
  select() {
    this.hiddenDetail = !this.hiddenDetail;
  }

}
