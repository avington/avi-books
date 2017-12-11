import { TestBed, inject } from '@angular/core/testing';

import { AddTokenService } from './add-token.service';

describe('AddTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTokenService]
    });
  });

  it('should be created', inject([AddTokenService], (service: AddTokenService) => {
    expect(service).toBeTruthy();
  }));
});
