import { TestBed } from '@angular/core/testing';

import { NdaserviceService } from './ndaservice.service';

describe('NdaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NdaserviceService = TestBed.get(NdaserviceService);
    expect(service).toBeTruthy();
  });
});
