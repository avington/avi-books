import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvancedSearchContainerComponent} from './advanced-search-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {AdvancedSearchFormComponent} from '../../components/advanced-search-form/advanced-search-form.component';
import {LayoutsModule} from '../../../layouts/layouts.module';
import {StoreModule} from '@ngrx/store';
import {GLOBAL_PROVIDERS} from '../../../global-providers';
import {INTERCEPTORS} from '../../../interceptors';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {LocationStrategy} from '@angular/common';

describe('AdvancedSearchContainerComponent', () => {
  let component: AdvancedSearchContainerComponent;
  let fixture: ComponentFixture<AdvancedSearchContainerComponent>;

  class RouterMock {  }
  class ActivatedRouteMock {}
  class LocationStrategyMock {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        LayoutsModule,
        StoreModule.forRoot({}),
        RouterModule
      ],
      declarations: [AdvancedSearchContainerComponent, AdvancedSearchFormComponent],
      providers: [
        ...GLOBAL_PROVIDERS,
        ...INTERCEPTORS,
        {provide: Router, useValue: new RouterMock()},
        {provide: ActivatedRoute, useValue: new ActivatedRouteMock()},
        {provide: LocationStrategy, useValue: new LocationStrategyMock()},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
