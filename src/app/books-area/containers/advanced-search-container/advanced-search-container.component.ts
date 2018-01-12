import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'avi-advanced-search-container',
  templateUrl: './advanced-search-container.component.html',
  styleUrls: ['./advanced-search-container.component.scss']
})
export class AdvancedSearchContainerComponent implements OnInit {
  constructor(private store: Store<fromStore.BooksState>) {}

  ngOnInit() {}

  onFormSubmitted($event) {
    this.store.dispatch(new fromStore.AdvancedSearchAction($event));
  }
}
