import {BookShelfDetail} from '../models/book-shelf-detail';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {MyBookShelves} from '../models/my-book-shelves';
import {SearchRequest} from '../models/search-request';
import {SearchBooks} from '../models/search-books';

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

  searchBooks(term: string,
              maxResults: number = 10,
              projection: string = 'full'): Observable<any> {
    return this.http.get<any>(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=${maxResults}&projection=${projection}`
    );
  }

  advancedSearch(req: SearchRequest) {

    const maxResults = req.maxResults ? req.maxResults : 20;
    const libraryRestrict = req.libraryRestrict ? 'my-library' : 'no-restrict';
    const startIndex = req.startIndex ? req.startIndex : 0;
    const filter = req.filter ? `&filter=${req.filter}` : '';
    const orderBy = req.orderBy ? `&orderBy=${req.orderBy}` : '';
    const printType = req.printType ? `&printType=${req.printType}`: '';

    // noinspection TsLint
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=${req.q}&maxResults=${maxResults}${filter}&libraryRestrict=${libraryRestrict}${orderBy}${printType}&showPreorders=${req.showPreorders}&startIndex=${startIndex}`

    return this.http.get<SearchBooks>(
      url
    );
  }
}
