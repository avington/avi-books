import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'avi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private myBookShelves: { tileText: string; routerLinkText: string };

  tiles: any;

  constructor() {
  }

  ngOnInit() {

    this.tiles = {
      myBookShelves: {
        tileText: 'My Book Shelves',
        routerLinkText: '/books'
      },
      searchBooks: {
        tileText: 'Search Books',
        routerLinkText: '/books/search'
      }
    };

  }

}
