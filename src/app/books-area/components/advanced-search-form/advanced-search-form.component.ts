import { SearchRequest } from './../../models/search-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'avi-advanced-search-form',
  templateUrl: './advanced-search-form.component.html',
  styleUrls: ['./advanced-search-form.component.scss']
})
export class AdvancedSearchFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<SearchRequest>();
  advancedSearchForm: FormGroup;
  filterBy: string[];
  orderList: string[];
  printTypeList: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterBy = ['ebooks', 'free-ebooks', 'full', 'paid-ebooks', 'partial'];
    this.orderList = ['relevance', 'newest'];
    this.printTypeList = ['all', 'books', 'magazines'];

    this.advancedSearchForm = this.fb.group({
      searchBook: ['', [Validators.required]],
      filter: [''],
      libraryRestrict: [false],
      showPreorders: [true],
      orderBy: [''],
      printType: ['']
    });
  }

  onSubmit() {
    if (this.advancedSearchForm.valid) {
      const request: SearchRequest | any = {
        q: this.advancedSearchForm.controls.searchBook.value,
        filter: this.advancedSearchForm.controls.filter.value,
        libraryRestrict: this.advancedSearchForm.controls.libraryRestrict.value,
        showPreorders: this.advancedSearchForm.controls.showPreorders.value,
        orderBy: this.advancedSearchForm.controls.orderBy.value,
        printType: this.advancedSearchForm.controls.printType.value
      };
      this.formSubmitted.emit(request);
    }
  }
}
