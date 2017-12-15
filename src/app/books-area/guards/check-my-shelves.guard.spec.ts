import { TestBed, async, inject } from '@angular/core/testing';

import { CheckMyShelvesGuard } from './check-my-shelves.guard';

describe('CheckMyShelvesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckMyShelvesGuard],
    });
  });

  xit('should ...', inject([CheckMyShelvesGuard], (guard: CheckMyShelvesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
