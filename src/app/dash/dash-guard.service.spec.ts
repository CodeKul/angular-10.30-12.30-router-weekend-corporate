import { TestBed, inject } from '@angular/core/testing';

import { DashGuardService } from './dash-guard.service';

describe('DashGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashGuardService]
    });
  });

  it('should be created', inject([DashGuardService], (service: DashGuardService) => {
    expect(service).toBeTruthy();
  }));
});
