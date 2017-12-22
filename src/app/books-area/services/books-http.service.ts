import {BookShelfDetail} from '../models/book-shelf-detail';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {MyBookShelves} from '../models/my-book-shelves';

@Injectable()
export class BooksHttpService {
  constructor(private http: HttpClient) {
  }

  getMyLibraryBooksSelves(): Observable<MyBookShelves> {
    return this.http.get<MyBookShelves>(
      'https://www.googleapis.com/books/v1/mylibrary/bookshelves'
    );
  }

  getSelfLink(url: string): Observable<BookShelfDetail> {
    return this.http.get<BookShelfDetail>(url);
  }

  searchBooks(term: string): Observable<any> {
    console.log('the term sent', term);
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${term}`);
  }

}

