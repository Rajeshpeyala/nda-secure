import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanmanagementComponent } from './scanmanagement.component';

describe('ScanmanagementComponent', () => {
  let component: ScanmanagementComponent;
  let fixture: ComponentFixture<ScanmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
