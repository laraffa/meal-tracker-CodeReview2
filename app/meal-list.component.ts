import { Component, EventEmitter} from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {LowPipe} from './low.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [LowPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Show Low Calorie</option>
    <option value="notLow" selected="selected">Show High Calorie</option>
  </select>

  <meal-display *ngFor="#currentMeal of mealList | low:filterLow:selectedMeal"
  (click)="mealClicked(currentMeal)"
  [class.selected]= "currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>

  <edit-meal-details *ngIf="selectedMeal"
  [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterLow: string = "notLow";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
  }

}
