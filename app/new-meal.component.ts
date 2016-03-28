import { Component, EventEmitter } from 'angular2/core';
import { Meal } from "./meal.model";

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Add Your Meal</h3>
  <input placeholder="What did you eat?" class="col-sm-8 input-lg" #newMeal>
  <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
  <button (click)="addMeal(newMeal, newDescription, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMeal: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){

    var newMeal = new Meal(newMeal.value, newDescription.value, parseInt(newCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    newMeal.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
