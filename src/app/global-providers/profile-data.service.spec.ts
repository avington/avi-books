import { TestBed, inject } from '@angular/core/testing';

import { ProfileDataService } from './profile-data.service';
import {GLOBAL_PROVIDERS} from './index';

describe('ProfileDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDataService]
    });
  });

  it('should be created', inject([ProfileDataService], (service: ProfileDataService) => {
    expect(service).toBeTruthy();
  }));
});
