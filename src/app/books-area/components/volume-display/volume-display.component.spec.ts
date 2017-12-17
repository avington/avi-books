import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDisplayComponent } from './volume-display.component';

describe('VolumeDisplayComponent', () => {
  let component: VolumeDisplayComponent;
  let fixture: ComponentFixture<VolumeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
