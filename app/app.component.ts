import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';



@Component({
 selector: 'my-app',
 directives: [MealListComponent],
 template: `
   <div class="container">
   <h1>Meal Tracker</h1>
   <meal-list
   [mealList]="meals"
   (onMealSelect)=mealWasSelected($event)>
   </meal-list>
   </div>
 `
})

export class AppComponent {
  public meals : Meal[];
  constructor() {
    this.meals = [
      new Meal("Pizza", "I love Pizza ", 500),
      new Meal("Sandwhich ", "Turkey Sandwhich with cheese ", 200),
      new Meal("Chocolate Cake ", "Tyler's Birthday Cake ", 900),
    ];
  }

//click event input (of EventEmitter)
//click triggers this method, which takes a parameter of clickedMeal, clickedMeal is of the type Meal(model)
  mealWasSelected(clickedMeal: Meal): void {

  }
}
