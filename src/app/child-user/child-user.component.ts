import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../my-user/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-user',
  templateUrl: './child-user.component.html',
  styleUrls: ['./child-user.component.css']
})

export class ChildUserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  declineUser : EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeUser() {
    this.declineUser.emit(this.user);
  }

}
