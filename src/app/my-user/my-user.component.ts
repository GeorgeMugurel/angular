import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {

  myUsers: User[];
  restApi: RestApiService;

  loadingSpiner: boolean;

  constructor(restApi : RestApiService) {

    this.restApi = restApi;

    this.myUsers = [];

    // var user1 = new User();
    // user1.username = 'Andrei Popsescu';
    // user1.email = 'AndreiPopescu@yahoo.com';
    // user1.userActive = false;

    // var user2 = new User();
    // user2.username = 'Andrei Miron';
    // user2.email = 'AndreiMiron@yahoo.com';
    // user2.userActive = true;

    // var user3 = new User();
    // user3.username = 'Alexandru Ion';
    // user3.email = 'AlexandruIon@yahoo.com';
    // user3.userActive = true;

    // this.myUsers.push(user1);
    // this.myUsers.push(user2);
    // this.myUsers.push(user3);
  }

  ngOnInit() { 
    this.getUsers();
  }

  getUsers(): any {
    this.loadingSpiner = true;
    this.restApi.getAll().subscribe(response => {
      this.loadingSpiner = false;
      console.log(response);
      this.myUsers = response;
    })
  }

  addUser(user:User) {
    this.loadingSpiner = true;
    this.restApi.saveUser(user).subscribe(response=>{
      this.loadingSpiner = false;
      console.log(response);
      this.getUsers();
    });
  }

  deleteUser(user:User) {
    this.loadingSpiner = true;
    this.restApi.restDelete(user._id).subscribe(response=>{
      this.loadingSpiner = false;
      console.log(response);
      this.getUsers();
    });
  }

}
