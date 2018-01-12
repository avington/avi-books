import {Component, NgZone, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs/Observable';
import {Volume} from '../../models/volume';
import {SearchBooks} from '../../models/search-books';
import {AdvancedSearchBooksState} from '../../store/reducers/advanced-search.reducer';

@Component({
  selector: 'avi-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit {
  private search: { startIndex?: number; totalItems?: number; maxResults?: number; items?: Volume[] };

  items$: Observable<Volume[]>



  constructor(private store: Store<fromStore.BooksState>, private zone: NgZone) { }

  ngOnInit() {
    this.items$ = this.store.select(fromStore.getAdvancedSearchItemsFromEntitiyState);


  }

}
