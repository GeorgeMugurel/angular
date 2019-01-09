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
import { CarFormAddComponent } from './car-form-add/car-form-add.component';
import { CarFormEditComponent } from './car-form-edit/car-form-edit.component';
import { IncomeComponent } from './money-tracker/income/income.component';
import { ExpenseComponent } from './money-tracker/expense/expense.component';


const routes: Routes = [
  { path: 'users', component: MyUserComponent },
  { path: 'base-view', component: BaseViewComponent },
  { path: 'players', component: ParentBallComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'car-form', component: CarFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'car-form-add', component: CarFormAddComponent },
  { path: 'car-form-edit/:id', component: CarFormEditComponent },
  { path: 'money-tracker/income', component: IncomeComponent },
  { path: 'money-tracker/expense', component: ExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
