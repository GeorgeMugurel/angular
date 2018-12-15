import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyUserComponent }      from './my-user/my-user.component';
import { ChildUserComponent }      from './child-user/child-user.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { ParentBallComponent } from './parent-ball/parent-ball.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: 'users', component: MyUserComponent },
  { path: 'base-view', component: BaseViewComponent },
  { path: 'players', component: ParentBallComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'car-form', component: CarFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'observable', component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
