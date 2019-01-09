import { Component, OnInit } from '@angular/core';
import { Income } from '../income-class';
import { RestApiTrackerComponent } from '../rest-api-tracker/rest-api-tracker.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income: Income = new Income();
  restApiTracker: RestApiTrackerComponent;
  categories = ['salary', 'night-shift', 'work-bonus'];

  constructor(restApiTracker: RestApiTrackerComponent) {
    this.restApiTracker = restApiTracker;
  }

  ngOnInit() {

  }

  addIncome(income:Income) {
    this.restApiTracker.saveIncome(income).subscribe(response=>{
      console.log(response);
    });
  }
  

}
