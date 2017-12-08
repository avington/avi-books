import { TestBed, inject } from '@angular/core/testing';

import { TokenEffectsService } from './token-effects.service';

describe('TokenEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenEffectsService]
    });
  });

  it('should be created', inject([TokenEffectsService], (service: TokenEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
