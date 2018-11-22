import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedscansComponent } from './failedscans.component';

describe('FailedscansComponent', () => {
  let component: FailedscansComponent;
  let fixture: ComponentFixture<FailedscansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedscansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedscansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
