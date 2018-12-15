import { Component, OnInit } from '@angular/core';
import { of, fromEvent, Subscription } from 'rxjs';
import { User } from '../my-user/user';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  firstObservable(){

    var user1 = new User();
    user1.username = 'Andrei Popsescu';
    user1.email = 'AndreiPopescu@yahoo.com';
    user1.userActive = false;

    var user2 = new User();
    user2.username = 'Andrei Miron';
    user2.email = 'AndreiMiron@yahoo.com';
    user2.userActive = true;

    var user3 = new User();
    user3.username = 'Alexandru Ion';
    user3.email = 'AlexandruIon@yahoo.com';
    user3.userActive = true;

    var observable = of(user1, user2, user3);

    var makeSquare = map((u: User) => u.username + "/" + u.email);
    var excludeOdds = filter((val: User)=> val.userActive != false);

    var firstSubscribeHandlers = {
      next:x => console.log(x),
      error:err => {
        console.log(err.message);
      },
      complete: () => {
        console.log('First is completed');
      }

    };

    // var secondSubscribeHandlers = {
    //   next:x => console.log('second'+x),
    //   error:err => {
    //     console.log(err.message);
    //   },
    //   complete: () => {
    //     console.log('Second is completed');
    //   }

    // }

    observable.pipe(excludeOdds, makeSquare).subscribe(firstSubscribeHandlers);

    // setTimeout(function(){ 
    //   observable.subscribe(secondSubscribeHandlers);
    // }, 1000);
    

  }

  constructor() {
    this.firstObservable();
  }

  observableEvent():Subscription {
    var nameInpupt = document.getElementById('name') as HTMLInputElement;
    var observable = fromEvent(nameInpupt, 'keydown');

    var sub = observable.subscribe((event:any) =>{
      console.log(event.keyCode);
      if (event.keyCode == 27) {
        nameInpupt.value = '';
      }
    });

    return sub;
  }

  observableEvent2():Subscription {
    var nameInpupt = document.getElementById('name') as HTMLInputElement;
    var observable = fromEvent(nameInpupt, 'keydown');

    var sub2 = observable.subscribe((event:any) =>{
      console.log(event.keyCode);
      if (event.keyCode == 13) {
        alert(nameInpupt.value);
      }
    });

    return sub2;

  }

  observableClear() {

    var subscription = this.observableEvent();

    var nameInpupt = document.getElementById('clearEsc') as HTMLInputElement;
    var observable = fromEvent(nameInpupt, 'change');

    observable.subscribe((event:any) =>{
      console.log(event.keyCode);
      if (!event.target.checked) {
        subscription.unsubscribe();
      }else {
        subscription = this.observableEvent();
      }
    });
  }

  observableAlert() {

    var subscription = this.observableEvent2();

    var nameInpupt = document.getElementById('alertEnter') as HTMLInputElement;
    var observable = fromEvent(nameInpupt, 'change');

    observable.subscribe((event:any) =>{
      console.log(event.keyCode);
      if (!event.target.checked) {
        subscription.unsubscribe();
      }else {
        subscription = this.observableEvent2();
      }
    });
  }

  ngOnInit() {
    //this.observableEvent();
    this.observableAlert();
    this.observableClear();
  }

}
