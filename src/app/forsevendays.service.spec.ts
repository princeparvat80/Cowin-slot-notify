import { TestBed } from '@angular/core/testing';

import { ForsevendaysService } from './forsevendays.service';

describe('ForsevendaysService', () => {
  let service: ForsevendaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForsevendaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
