import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-child',
  templateUrl: './tic-tac-toe-child.component.html',
  styleUrls: ['./tic-tac-toe-child.component.css']
})
export class TicTacToeChildComponent implements OnInit {

  @Input()
  line: number;

  @Input()
  column: number;

  @Output()
  positionClicked: EventEmitter<number[]> = new EventEmitter();

  constructor() {}

  positionClickedEvent(){
    this.positionClicked.emit([this.line, this.column]);
  }

  ngOnInit() {
  }

}
