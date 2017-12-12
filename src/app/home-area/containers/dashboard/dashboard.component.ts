import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private myBookShelves: { tileText: string; routerLinkText: string };

  constructor() { }

  ngOnInit() {

    this.myBookShelves = {
      tileText: 'My Book Shelves',
      routerLinkText: '/books'
    };
  }

}
