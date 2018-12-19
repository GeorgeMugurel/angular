import { Component, OnInit } from '@angular/core';
import { Car } from '../car-form/car';
import { RestApiCarService } from '../rest-api-car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-form-edit',
  templateUrl: './car-form-edit.component.html',
  styleUrls: ['./car-form-edit.component.css']
})
export class CarFormEditComponent implements OnInit {
  car: Car;
  restApiCar: RestApiCarService;
  constructor(restApiCar : RestApiCarService, private route:ActivatedRoute) {
    this.restApiCar = restApiCar; 
  }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.restApiCar.getById(id).subscribe(response=>{
      console.log(response);
      this.car = response;
    });
  }

  editMyCar(car:Car) {
    this.restApiCar.editCar(car, car._id).subscribe(response=>{
      console.log(response);
    });
  }

}
