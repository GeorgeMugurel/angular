import { Component, OnInit, Output } from '@angular/core';
import { User } from '../my-user/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {

  user: User;

  @Output()
  onAdd : EventEmitter<User> = new EventEmitter();

  constructor() { 
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
    this.onAdd.emit(this.user);
    this.user  = new User();
  }

}
