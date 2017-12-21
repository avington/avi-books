import { Volume } from './../../models/volume';
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'avi-volume-display',
  templateUrl: './volume-display.component.html',
  styleUrls: ['./volume-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolumeDisplayComponent implements OnInit {
  @Input() volume: Volume;
  private authors: string;


  constructor() {}

  ngOnInit(  ) {
    this.authors = this.volume.volumeInfo.authors.join(', ');
  }
}
