import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BooksHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getMyLibraryBooksSelves(): Observable<any> {
    return this.http.get<any>('https://www.googleapis.com/books/v1/mylibrary/bookshelves');
  }

}
