import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationContactsItemComponent } from './hospitalization-contacts-item.component';

describe('HospitalizationContactsItemComponent', () => {
  let component: HospitalizationContactsItemComponent;
  let fixture: ComponentFixture<HospitalizationContactsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizationContactsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationContactsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
