import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookShelvesComponent } from './my-book-shelves.component';

describe('MyBookShelvesComponent', () => {
  let component: MyBookShelvesComponent;
  let fixture: ComponentFixture<MyBookShelvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookShelvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
