import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-parent-ball',
  templateUrl: './parent-ball.component.html',
  styleUrls: ['./parent-ball.component.css']
})
export class ParentBallComponent implements OnInit {

  player1 : Player;
  player2 : Player;
  
  constructor() {
    this.player1 = new Player();
    this.player1.username = 'Donald';
    this.player1.childBall = [true, true, true];
    this.player1.id = 1;

    this.player2 = new Player();
    this.player2.username = 'John';
    this.player2.childBall = [true, true, true, true, true];
    this.player2.id = 2;

  }

  getPlayerId(id:number) {
    if (id == 1) {
      this.player1.removeBall();
      this.player2.pushBall();
    }else if (id == 2) {
      this.player2.removeBall();
      this.player1.pushBall();
    }
  }
 
  ngOnInit() {
  }

}
