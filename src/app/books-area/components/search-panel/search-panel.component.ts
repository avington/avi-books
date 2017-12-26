import { Observable } from 'rxjs/Observable';
import { Volume } from './../../models/volume';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as fromBooksStore from '../../store';
import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'avi-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent implements OnInit {
  @Input() volumes: Volume[];
  @Output() termChanged = new EventEmitter<string>();
  @Output() termEntered = new EventEmitter<string>();
  searchBooksForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchBooksForm = this.fb.group({
      searchBooks: ['', Validators.required]
    });

    this.searchBooksForm.valueChanges.subscribe(term => {
      this.termChanged.emit(_.get(term, 'searchBooks'));
    });
  }
}
