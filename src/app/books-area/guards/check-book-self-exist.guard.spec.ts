import { StoreModule } from '@ngrx/store';
import { TestBed, async, inject } from '@angular/core/testing';

import { CheckBookSelfExistGuard } from './check-book-self-exist.guard';

describe('CheckBookSelfExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckBookSelfExistGuard],
      imports: [StoreModule.forRoot({})]
    });
  });

  it(
    'should ...',
    inject([CheckBookSelfExistGuard], (guard: CheckBookSelfExistGuard) => {
      expect(guard).toBeTruthy();
    })
  );
});
