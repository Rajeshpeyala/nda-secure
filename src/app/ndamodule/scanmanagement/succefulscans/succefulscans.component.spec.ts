import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccefulscansComponent } from './succefulscans.component';

describe('SuccefulscansComponent', () => {
  let component: SuccefulscansComponent;
  let fixture: ComponentFixture<SuccefulscansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccefulscansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccefulscansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
