import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormAddComponent } from './car-form-add.component';

describe('CarFormAddComponent', () => {
  let component: CarFormAddComponent;
  let fixture: ComponentFixture<CarFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
