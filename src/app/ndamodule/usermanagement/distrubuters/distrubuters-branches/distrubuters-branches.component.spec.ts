import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrubutersBranchesComponent } from './distrubuters-branches.component';

describe('DistrubutersBranchesComponent', () => {
  let component: DistrubutersBranchesComponent;
  let fixture: ComponentFixture<DistrubutersBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrubutersBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrubutersBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
