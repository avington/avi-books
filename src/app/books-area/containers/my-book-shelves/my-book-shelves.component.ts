import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'avi-my-book-shelves',
  templateUrl: './my-book-shelves.component.html',
  styleUrls: ['./my-book-shelves.component.scss']
})
export class MyBookShelvesComponent implements OnInit {

  constructor(
    private store: Store<fromStore.BooksState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadMyBookShelves());
  }

}
