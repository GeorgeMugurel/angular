import { Component, OnInit, Input, Output } from '@angular/core';
import { Car } from '../car-form/car';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  carModelOutput: EventEmitter<Car> = new EventEmitter();

  engines = ['diesel', 'gasoline', 'GPL'];

  constructor() {
    
}

  formSubmit(){
    this.carModelOutput.emit(this.car);
  }



  ngOnInit() {
  }

}