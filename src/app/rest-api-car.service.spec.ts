import { TestBed } from '@angular/core/testing';

import { RestApiCarService } from './rest-api-car.service';

describe('RestApiCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiCarService = TestBed.get(RestApiCarService);
    expect(service).toBeTruthy();
  });
});
