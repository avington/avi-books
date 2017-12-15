import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {BookShelf} from '../../models/book-shelf';

// stores
import * as fromStore from '../../store';
import * as fromRootStore from '../../../store';

@Component({
  selector: 'avi-my-book-shelves',
  templateUrl: './my-book-shelves.component.html',
  styleUrls: ['./my-book-shelves.component.scss']
})
export class MyBookShelvesComponent implements OnInit {

  bookShelves$: Observable<BookShelf[]>;

  constructor(private store: Store<fromStore.BooksState>) {
  }

  ngOnInit() {
    this.bookShelves$ = this.store.select(fromStore.getMyBookShelvesList);
  }

}
