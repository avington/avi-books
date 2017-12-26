import { Volume } from './../../models/volume';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromBooksStore from '../../store';

@Component({
  selector: 'avi-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  searchBooksForm: FormGroup;
  volumes: Volume[];

  constructor(private store: Store<fromBooksStore.BooksState>) {}

  ngOnInit() {}

  onTermChagned($event) {
    this.store.dispatch(new fromBooksStore.SearchBooksAction($event));
    this.store
      .select(fromBooksStore.getSearchBooksEntities)
      .subscribe(volumes => {
        this.volumes = [...volumes];
      });
  }

  onTermEntered($event) {}
}
