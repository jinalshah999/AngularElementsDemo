import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocounterComponent } from './democounter.component';

describe('DemocounterComponent', () => {
  let component: DemocounterComponent;
  let fixture: ComponentFixture<DemocounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
