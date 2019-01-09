import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiTrackerComponent } from './rest-api-tracker.component';

describe('RestApiTrackerComponent', () => {
  let component: RestApiTrackerComponent;
  let fixture: ComponentFixture<RestApiTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
