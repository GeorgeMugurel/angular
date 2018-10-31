import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  employe = {};
  model : Employe;

  constructor() {
    //this.employe = new Employe('Andrei', 'Popescu');
    this.model = new Employe('Andrei', 'Popescu')
  }

  finishedProjects() {
    this.model.finishedProjects++;
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