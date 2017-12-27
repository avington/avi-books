import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avi-advanced-search-container',
  templateUrl: './advanced-search-container.component.html',
  styleUrls: ['./advanced-search-container.component.scss']
})
export class AdvancedSearchContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFormSubmitted($event) {
    console.log('form submitted', $event);
  }
}
