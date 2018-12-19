import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormEditComponent } from './car-form-edit.component';

describe('CarFormEditComponent', () => {
  let component: CarFormEditComponent;
  let fixture: ComponentFixture<CarFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
