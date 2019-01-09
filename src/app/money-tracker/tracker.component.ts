import { Component, OnInit, Input, Output } from '@angular/core';
import { Income } from './income-class';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  @Input()
  income: Income;

  @Output()
  incomeModelOutput: EventEmitter<Income> = new EventEmitter();

  constructor() { }

  formSubmit(){
    this.incomeModelOutput.emit(this.income);
  }

  ngOnInit() {
  }

}
