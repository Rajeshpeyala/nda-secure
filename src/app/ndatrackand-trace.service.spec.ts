import { TestBed } from '@angular/core/testing';

import { NdatrackandTraceService } from './ndatrackand-trace.service';

describe('NdatrackandTraceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NdatrackandTraceService = TestBed.get(NdatrackandTraceService);
    expect(service).toBeTruthy();
  });
});
