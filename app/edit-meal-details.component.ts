import {Component} from 'angular2/core';
import {Meal} from './meal.model';

//[(ngModel)] = creates two-way data binding, when we click on item we can both display and change info

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="editForm">
    <h3>Edit the Following Meal:  {{ meal.mealName }} {{ meal.description }} {{meal.calories}}</h3>
    <input [(ngModel)]="meal.mealName" class="col-sm-3 input-lg meal-form"/>
    <input [(ngModel)]="meal.description" class="col-sm-3 input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="col-sm-3 input-lg meal-form"/>
    <br>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
