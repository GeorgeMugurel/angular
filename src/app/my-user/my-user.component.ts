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
