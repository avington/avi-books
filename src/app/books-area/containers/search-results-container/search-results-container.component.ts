import {ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs/Observable';
import {Volume} from '../../models/volume';
import {SearchRequest} from '../../models/search-request';
import {AdvancedSearchAction} from '../../store/actions';

@Component({
  selector: 'avi-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsContainerComponent implements OnInit {
  pageSizeOptions = [10, 20, 40];
  items$: Observable<Volume[]>;
  pageInfo$: Observable<{ pageIndex: number, length: number, pageSize: number }>;
  private searchRequest: SearchRequest;

  constructor(private store: Store<fromStore.BooksState>) {
  }


  ngOnInit() {

    this.items$ = this.store.select(
      fromStore.getAdvancedSearchItemsFromEntitiyState
    );

    this.pageInfo$ = this.store.select(
      fromStore.getAdvancedSearchPagingInfoFromEntitiyState
    )

    this.store.select(fromStore.getAdvancedSearchEntitiesFromState).subscribe(entity => {
      this.searchRequest = {
        maxResults: entity.maxResults,
        startIndex: entity.startIndex,
        printType: entity.printType,
        orderBy: entity.orderBy,
        filter: entity.filter,
        showPreorders: entity.showPreorders,
        libraryRestrict: entity.libraryRestrict,
        q: entity.q
      };
    });

  }

  pageEvent($event) {
    const startIndex: number = $event.pageIndex * $event.pageSize;
    this.searchRequest = {
      ...this.searchRequest,
      startIndex
    };

    console.log(this.searchRequest);
    this.store.dispatch(new AdvancedSearchAction(this.searchRequest));
  }
}
