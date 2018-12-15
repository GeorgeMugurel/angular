import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../parent-ball/player';

@Component({
  selector: 'app-child-ball',
  templateUrl: './child-ball.component.html',
  styleUrls: ['./child-ball.component.css']
})
export class ChildBallComponent implements OnInit {

  @Input()
  player: Player;

  @Output()
  passBall : EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  clickBall() {
    this.passBall.emit(this.player.id);
  }

  ngOnInit() {
  }

}
