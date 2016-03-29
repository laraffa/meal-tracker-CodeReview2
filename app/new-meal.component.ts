import { Component, EventEmitter } from 'angular2/core';
import { Meal } from "./meal.model";

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Input Your Meal</h3>
    <input placeholder="What did you eat?" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){

    var newMeal = new Meal(newName.value, newDescription.value, parseInt(newCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
