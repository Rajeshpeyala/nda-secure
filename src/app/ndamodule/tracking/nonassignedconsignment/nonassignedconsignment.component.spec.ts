import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonassignedconsignmentComponent } from './nonassignedconsignment.component';

describe('NonassignedconsignmentComponent', () => {
  let component: NonassignedconsignmentComponent;
  let fixture: ComponentFixture<NonassignedconsignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonassignedconsignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonassignedconsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
