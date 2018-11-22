import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredcompaniesComponent } from './registeredcompanies.component';

describe('RegisteredcompaniesComponent', () => {
  let component: RegisteredcompaniesComponent;
  let fixture: ComponentFixture<RegisteredcompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredcompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
