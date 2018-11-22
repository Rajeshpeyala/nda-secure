import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBarCodeScansComponent } from './no-bar-code-scans.component';

describe('NoBarCodeScansComponent', () => {
  let component: NoBarCodeScansComponent;
  let fixture: ComponentFixture<NoBarCodeScansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBarCodeScansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBarCodeScansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
