import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorsComponent } from './inspectors.component';

describe('InspectorsComponent', () => {
  let component: InspectorsComponent;
  let fixture: ComponentFixture<InspectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
