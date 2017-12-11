import { Component, OnInit } from '@angular/core';
import * as fromBookStore from '../../store'
import {Store} from '@ngrx/store';

@Component({
  selector: 'avi-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  constructor(
    private store: Store<fromBookStore.BooksState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromBookStore.LoadMyBooks());
    this.store.select(fromBookStore.getMyBooksEntitiesFromState).subscribe((response) => console.log(response));
  }

}
