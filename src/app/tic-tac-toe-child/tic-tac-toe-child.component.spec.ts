import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeChildComponent } from './tic-tac-toe-child.component';

describe('TicTacToeChildComponent', () => {
  let component: TicTacToeChildComponent;
  let fixture: ComponentFixture<TicTacToeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacToeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
