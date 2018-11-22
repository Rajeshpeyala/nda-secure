import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorscanmanagementComponent } from './inspectorscanmanagement.component';

describe('InspectorscanmanagementComponent', () => {
  let component: InspectorscanmanagementComponent;
  let fixture: ComponentFixture<InspectorscanmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorscanmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorscanmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
