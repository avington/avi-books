import { TestBed, inject } from '@angular/core/testing';

import { BooksHttpService } from './books-http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BooksHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksHttpService]
    });
  });

  it('should be created', inject([BooksHttpService], (service: BooksHttpService) => {
    expect(service).toBeTruthy();
  }));
});
