import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalproductsComponent } from './totalproducts.component';

describe('TotalproductsComponent', () => {
  let component: TotalproductsComponent;
  let fixture: ComponentFixture<TotalproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
