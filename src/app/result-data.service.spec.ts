import { TestBed } from '@angular/core/testing';

import { ResultDataService } from './result-data.service';

describe('ResultDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultDataService = TestBed.get(ResultDataService);
    expect(service).toBeTruthy();
  });
});
