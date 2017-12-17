import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookShelfComponent } from './my-book-shelf.component';

describe('MyBookShelfComponent', () => {
  let component: MyBookShelfComponent;
  let fixture: ComponentFixture<MyBookShelfComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyBookShelfComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
