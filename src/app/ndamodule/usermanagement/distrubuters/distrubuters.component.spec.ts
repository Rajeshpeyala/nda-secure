import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrubutersComponent } from './distrubuters.component';

describe('DistrubutersComponent', () => {
  let component: DistrubutersComponent;
  let fixture: ComponentFixture<DistrubutersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrubutersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrubutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
