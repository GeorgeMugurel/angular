import { Component, OnInit } from '@angular/core';
import { Car } from '../car-form/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carModel: Car;

  engines = ['diesel', 'gasoline', 'GPL'];

  constructor() {
    this.carModel = new Car();

    this.carModel.model = 'BMW';
    this.carModel.vin = '12AB456456ASDASD1';
    this.carModel.year = 2017;
    this.carModel.forSale = true;
    this.carModel.engine = this.engines[0];


  }

  formSubmit(){
    console.log(this.carModel);
  }

  ngOnInit() {
  }

}
