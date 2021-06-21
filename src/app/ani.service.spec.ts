import { TestBed } from '@angular/core/testing';

import { AniService } from './ani.service';

describe('AniService', () => {
  let service: AniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
