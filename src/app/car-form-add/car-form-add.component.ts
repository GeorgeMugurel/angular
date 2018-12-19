import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car-form/car';
import { RestApiCarService } from '../rest-api-car.service';

@Component({
  selector: 'app-car-form-add',
  templateUrl: './car-form-add.component.html',
  styleUrls: ['./car-form-add.component.css']
})
export class CarFormAddComponent implements OnInit {

  car: Car = new Car();
  restApiCar: RestApiCarService;

  constructor(restApiCar : RestApiCarService) {

    this.restApiCar = restApiCar; 

  }

  ngOnInit() {

  }

  addCar(car:Car) {
    this.restApiCar.saveCar(car).subscribe(response=>{
      console.log(response);
    });
  }
}
