import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBallComponent } from './child-ball.component';

describe('ChildBallComponent', () => {
  let component: ChildBallComponent;
  let fixture: ComponentFixture<ChildBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
