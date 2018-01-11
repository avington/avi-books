import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchFormComponent } from './advanced-search-form.component';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormField, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AdvancedSearchFormComponent', () => {
  let component: AdvancedSearchFormComponent;
  let fixture: ComponentFixture<AdvancedSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule
      ],
      declarations: [ AdvancedSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
