import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MismatchedScansComponent } from './mismatched-scans.component';

describe('MismatchedScansComponent', () => {
  let component: MismatchedScansComponent;
  let fixture: ComponentFixture<MismatchedScansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MismatchedScansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MismatchedScansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
