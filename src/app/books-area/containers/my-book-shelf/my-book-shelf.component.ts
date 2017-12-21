import { BookShelf } from './../../models/book-shelf';
import { Volume } from './../../models/volume';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'avi-my-book-shelf',
  templateUrl: './my-book-shelf.component.html',
  styleUrls: ['./my-book-shelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyBookShelfComponent implements OnInit {
  constructor(private store: Store<fromStore.BooksState>) {}

  volumes$: Observable<Volume[]>;
  bookShelf: BookShelf;

  ngOnInit() {
    this.store
      .select(fromStore.getSelectedBookShelfFromShelves)
      .subscribe(bookShelf => {
        this.bookShelf = bookShelf;
        this.store.dispatch(new fromStore.LoadBookShelfActon(bookShelf));
      });

    this.volumes$ = this.store.select(fromStore.getMyBookShelfVolumesList);
  }
}
