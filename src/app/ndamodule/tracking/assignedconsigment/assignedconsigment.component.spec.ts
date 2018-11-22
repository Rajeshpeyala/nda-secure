import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedconsigmentComponent } from './assignedconsigment.component';

describe('AssignedconsigmentComponent', () => {
  let component: AssignedconsigmentComponent;
  let fixture: ComponentFixture<AssignedconsigmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedconsigmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedconsigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
