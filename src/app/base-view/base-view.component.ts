import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent {
  title = 'my-app';
  employe = {};
  model : Employe;
  car : {};
  carList = [];

  constructor() {
    //this.employe = new Employe('Andrei', 'Popescu');
    this.model = new Employe('Andrei', 'Popescu');
    this.useDefaultClasses();
    //this.car = new Car('BMW', 'Some description');
    // this.carList.push({
    //   model: "BWM",
    //   description: 'My description'
    // });
    // this.carList.push({
    //   model: "Opel",
    //   description: 'My description'
    // });
    // this.carList.push({
    //   model: "VW",
    //   description: 'My description'
    // })
  }

  finishedProjects() {
    this.model.finishedProjects++;
  }

  currentClasses: {};
  useDefaultClasses() {
    this.currentClasses = {
      'zoomIn': false,
    }
  }
  
  myModel() {
    var model = prompt("What model do you have ?");
    var description = prompt('What description do you have ?');
    var car = new Car(model, description);
    this.carList.push(car);
  }

  zoom: boolean;
  colorRed : boolean;


  divProperties = {
    'width': '150px',
    'height': '150px',
    'background': 'blue'
  }

  update() {
    this.divProperties = {
      'width': this.zoom ? '300px': '150px',
      'height': this.zoom ? '300px': '150px',
      'background': this.colorRed ? 'red' : 'blue'
    }
  }

}


export class Employe {
  firstName: string;
  lastName: string;
  finishedProjects: number;

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName;
    this.finishedProjects = 0;
  }

}

export class Car {
  model: string;
  description: string

  constructor(model, description) {
    this.model = model;
    this.description = description;
    
  }

}