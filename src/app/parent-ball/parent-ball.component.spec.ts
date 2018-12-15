import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBallComponent } from './parent-ball.component';

describe('ParentBallComponent', () => {
  let component: ParentBallComponent;
  let fixture: ComponentFixture<ParentBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
