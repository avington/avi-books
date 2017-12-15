import { Component, OnInit } from '@angular/core';
import * as fromSharedStore from './../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'avi-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  private isLoading$: Observable<boolean>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromSharedStore.getGlobalLoadingSelector);
  }

}
