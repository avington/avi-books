import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionStorage} from 'ngx-webstorage';

@Component({
  selector: 'avi-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '0',
      })),
      state('out', style({
        height: '*',
      })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class DefaultHeaderComponent implements OnInit {

  @SessionStorage() isLoggedIn: boolean;

  expandState: string;

  constructor() {
  }

  ngOnInit() {
    this.expandState = 'in';


  }

  toggleMobileMenu() {
    this.expandState = this.expandState === 'out' ? 'in' : 'out';
  }
}
