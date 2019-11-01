import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationItemComponent } from './hospitalization-item.component';

describe('HospitalizationItemComponent', () => {
  let component: HospitalizationItemComponent;
  let fixture: ComponentFixture<HospitalizationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
