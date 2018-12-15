import { Component, OnInit } from '@angular/core';
import { Car } from '../car-form/car';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  car:Car;
  carForm: FormGroup;

  lastVersions : Array<Car> = [];

  engines = ['Gasoline', 'Diesel', 'Hybrid'];

  constructor(fb:FormBuilder) {

    this.car = new Car();
    this.car.model = "Mercedes";
    this.car.year = 2008;
    this.car.vin = "12345ghtlohfr561y";
    this.car.engine = "Diesel";
    this.car.forSale = true;

    this.carForm = fb.group({
      model : [this.car.model, Validators.required],
      year : [this.car.year],
      vin : [this.car.vin, Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      engine : [this.car.engine],
      forSale : [this.car.forSale]
    })

    this.carForm.valueChanges.subscribe((event:Car) =>{
      var changeTime = new Date();
      // console.log(event);
      this.lastVersions.push(event);
      // console.log('AICI');
      console.log(this.lastVersions, changeTime);
    });

  }

  formSubmit(){
    console.log(this.carForm);
    console.log(this.lastVersions);
  }

  ngOnInit() {
  }

}
