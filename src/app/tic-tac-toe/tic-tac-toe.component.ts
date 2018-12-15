import { Component, OnInit } from '@angular/core';
import { TicTacToeChildComponent } from '../tic-tac-toe-child/tic-tac-toe-child.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  tabel : boolean[][];
  currentTurn : boolean;
  box: TicTacToeChildComponent = new TicTacToeChildComponent();

  constructor() {
    this.initValues();
  }

  initValues() {
    this.tabel = [];
    this.currentTurn == true;
    this.tabel.push([undefined, undefined, undefined])
    this.tabel.push([undefined, undefined, undefined])
    this.tabel.push([undefined, undefined, undefined])
    console.log(this.tabel);
  }

  myTabel(position:number) {

    var line = position[0];
    var column = position[1];


    if ( this.currentTurn == true ) {
      this.tabel[line][column] = true;
      this.currentTurn = false;
    } else {
      this.tabel[line][column] = false;
      this.currentTurn = true;
    }

  }

  ngOnInit() {
  }

}
