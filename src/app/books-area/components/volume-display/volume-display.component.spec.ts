import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDisplayComponent } from './volume-display.component';
import {SharedModule} from '../../../shared/shared.module';

describe('VolumeDisplayComponent', () => {
  let component: VolumeDisplayComponent;
  let fixture: ComponentFixture<VolumeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeDisplayComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
