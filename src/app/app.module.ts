import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyUserComponent } from './my-user/my-user.component';
import { ChildUserComponent } from './child-user/child-user.component';
import { AddChildComponent } from './add-child/add-child.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { ParentBallComponent } from './parent-ball/parent-ball.component';
import { ChildBallComponent } from './child-ball/child-ball.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TicTacToeChildComponent } from './tic-tac-toe-child/tic-tac-toe-child.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';
import {HttpModule} from '@angular/http';
import { RestApiService } from './rest-api.service';
import { CarFormAddComponent } from './car-form-add/car-form-add.component';
import { CarFormEditComponent } from './car-form-edit/car-form-edit.component';
import { IncomeComponent } from './money-tracker/income/income.component';
import { ExpenseComponent } from './money-tracker/expense/expense.component';
import { TrackerComponent } from './money-tracker/tracker.component';
import { RestApiTrackerComponent } from './money-tracker/rest-api-tracker/rest-api-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    MyUserComponent,
    ChildUserComponent,
    AddChildComponent,
    BaseViewComponent,
    ParentBallComponent,
    ChildBallComponent,
    TicTacToeComponent,
    TicTacToeChildComponent,
    CarFormComponent,
    ReactiveFormComponent,
    ObservableComponent,
    CarFormAddComponent,
    CarFormEditComponent,
    IncomeComponent,
    ExpenseComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    RestApiService,
    RestApiTrackerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
