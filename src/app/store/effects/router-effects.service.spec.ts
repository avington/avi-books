import { TestBed, inject } from '@angular/core/testing';

import { RouterEffectsService } from './router-effects.service';

describe('RouterEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterEffectsService]
    });
  });

  it('should be created', inject([RouterEffectsService], (service: RouterEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
