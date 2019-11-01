import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationPeriodsItemComponent } from './hospitalization-periods-item.component';

describe('HospitalizationPeriodsItemComponent', () => {
  let component: HospitalizationPeriodsItemComponent;
  let fixture: ComponentFixture<HospitalizationPeriodsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizationPeriodsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationPeriodsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
