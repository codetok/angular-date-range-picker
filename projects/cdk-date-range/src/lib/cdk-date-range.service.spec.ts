import { TestBed, inject } from '@angular/core/testing';

import { CdkDateRangeService } from './cdk-date-range.service';

describe('CdkDateRangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CdkDateRangeService]
    });
  });

  it('should be created', inject([CdkDateRangeService], (service: CdkDateRangeService) => {
    expect(service).toBeTruthy();
  }));
});
