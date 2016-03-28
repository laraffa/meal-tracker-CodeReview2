import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "low",
  pure: false

})

export class LowPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredLowState = args[0];
    if(desiredLowState === "low") {
      return input.filter((meal) => {
        if(meal.calories < 300) {
         return !meal.low;
       }
      });
    } else if (desiredLowState === "notLow") {
      return input.filter((meal) => {
        if(meal.calories > 300){
          return !meal.low;
        }
      });
    } else {
      return input;
    }
  }
}
