import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { MyBookShelves } from '../models/my-book-shelves';

@Injectable()
export class BooksHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getMyLibraryBooksSelves(): Observable<MyBookShelves> {
    return this.http.get<MyBookShelves>('https://www.googleapis.com/books/v1/mylibrary/bookshelves');
  }

}
