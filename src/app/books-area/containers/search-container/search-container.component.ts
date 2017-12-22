import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromBooksStore from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'avi-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchBooksForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromBooksStore.BooksState>) {
  }

  ngOnInit() {
    this.searchBooksForm = this.fb.group({
      searchBooks: ['', [Validators.required]]
    });

    this.searchBooksForm.valueChanges
      .subscribe(term => this.store.dispatch(new fromBooksStore.SearchBooksAction(term)));


  }

}

