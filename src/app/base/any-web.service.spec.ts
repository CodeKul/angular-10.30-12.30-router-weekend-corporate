import { TestBed, inject } from '@angular/core/testing';

import { AnyWebService } from './any-web.service';

describe('AnyWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnyWebService]
    });
  });

  it('should be created', inject([AnyWebService], (service: AnyWebService) => {
    expect(service).toBeTruthy();
  }));
});
