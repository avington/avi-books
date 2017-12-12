import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'avi-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  @Input() tileText: string;
  @Input() routerLinkText: string;

  constructor() { }

  ngOnInit() {
  }

}
