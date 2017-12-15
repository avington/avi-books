import { TestBed, async, inject } from '@angular/core/testing';

import { CheckBookSelfExistGuard } from './check-book-self-exist.guard';

describe('CheckBookSelfExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckBookSelfExistGuard]
    });
  });

  it('should ...', inject([CheckBookSelfExistGuard], (guard: CheckBookSelfExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
