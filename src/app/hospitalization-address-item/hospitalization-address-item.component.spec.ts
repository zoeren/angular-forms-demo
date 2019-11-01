import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationAddressItemComponent } from './hospitalization-address-item.component';

describe('HospitalizationAddressItemComponent', () => {
  let component: HospitalizationAddressItemComponent;
  let fixture: ComponentFixture<HospitalizationAddressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizationAddressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationAddressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
