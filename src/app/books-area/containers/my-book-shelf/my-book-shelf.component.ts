import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'avi-my-book-shelf',
  templateUrl: './my-book-shelf.component.html',
  styleUrls: ['./my-book-shelf.component.scss']
})
export class MyBookShelfComponent implements OnInit {

  constructor(
    private store: Store<fromStore.BooksState>
  ) { }

  ngOnInit() {
    this.store.select(fromStore.getSelectedBookShelfFromShelves).pipe(
      switchMap((bookShelf) => {
        // TODO: once bookshelf from list is loaded dispatch an action to load the bookshelf details
        return of(bookShelf);
      })
    );

  }

}
