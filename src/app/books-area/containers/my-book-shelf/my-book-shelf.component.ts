import { getMyBookShelfEntity } from './../../store/selectors/my-book-self.selectors';
import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'avi-my-book-shelf',
  templateUrl: './my-book-shelf.component.html',
  styleUrls: ['./my-book-shelf.component.scss']
})
export class MyBookShelfComponent implements OnInit {
  constructor(private store: Store<fromStore.BooksState>) {}

  ngOnInit() {
    this.store
      .select(fromStore.getSelectedBookShelfFromShelves)
      .subscribe(bookShelf =>
        this.store.dispatch(new fromStore.LoadBookShelfActon(bookShelf))
      );

    this.store
      .select(fromStore.getMyBookShelfEntity)
      .subscribe(entitiy => console.log(entitiy));
  }
}
