import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookShelf} from '../../models/book-shelf';

@Component({
  selector: 'avi-book-shelf-tile',
  templateUrl: './book-shelf-tile.component.html',
  styleUrls: ['./book-shelf-tile.component.scss']
})
export class BookShelfTileComponent implements OnInit {

  @Input() bookShelf: BookShelf;
  @Output() bookSelfTriggered = new EventEmitter<BookShelf>();

  constructor() { }

  ngOnInit() {
  }


}
