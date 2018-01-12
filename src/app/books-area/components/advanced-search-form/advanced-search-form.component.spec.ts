import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvancedSearchFormComponent} from './advanced-search-form.component';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormField, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchRequest} from '../../models/search-request';

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
      declarations: [AdvancedSearchFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an invalid form when it is blank', () => {
    expect(component.advancedSearchForm.valid).toBeFalsy();
  });

  it('should have searchBook invalid', () => {
    const searchTerm = component.advancedSearchForm.controls['searchBook'];
    expect(searchTerm.valid).toBeFalsy();
  });

  it('should be a valid form when searchBook has text', () => {
    const searchTerm = component.advancedSearchForm.controls['searchBook'];
    searchTerm.setValue('test');
    expect(searchTerm.valid).toBeTruthy();
  });

  it('should have the correct form values when submitted', () => {
    component.advancedSearchForm.controls['searchBook'].setValue('lord of the rings');
    component.advancedSearchForm.controls['filter'].setValue('ebooks');
    component.advancedSearchForm.controls['libraryRestrict'].setValue(true);
    component.advancedSearchForm.controls['showPreorders'].setValue(true);
    component.advancedSearchForm.controls['orderBy'].setValue('relevance');
    component.advancedSearchForm.controls['printType'].setValue('all');

    let request: SearchRequest = null;
    component.formSubmitted.subscribe((value) => request = value);

    component.onSubmit();

    expect(request.q).toBe('lord of the rings');
    expect(request.filter).toBe('ebooks');
    expect(request.libraryRestrict).toBe(true);
    expect(request.showPreorders).toBe(true);
    expect(request.orderBy).toBe('relevance');
    expect(request.printType).toBe('all');
  });
});
