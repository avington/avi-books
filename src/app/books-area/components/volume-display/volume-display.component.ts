import { Volume } from './../../models/volume';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avi-volume-display',
  templateUrl: './volume-display.component.html',
  styleUrls: ['./volume-display.component.scss']
})
export class VolumeDisplayComponent implements OnInit {
  @Input() volume: Volume;

  constructor() {}

  ngOnInit() {}
}
