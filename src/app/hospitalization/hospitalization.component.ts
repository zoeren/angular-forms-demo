import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AddStepInfo, Step } from '../app.component';
import { HospitalizationAddressItemComponent } from '../hospitalization-address-item/hospitalization-address-item.component';
import { HospitalizationPeriodsItemComponent } from '../hospitalization-periods-item/hospitalization-periods-item.component';
import { HospitalizationContactsItemComponent } from '../hospitalization-contacts-item/hospitalization-contacts-item.component';

@Component({
  selector: 'app-hospitalization',
  templateUrl: './hospitalization.component.html',
  styleUrls: ['./hospitalization.component.scss']
})
export class HospitalizationComponent implements OnInit {

  @Input() thisStep: Step;
  @Input() lala: string;
  @Output() addStepAfter = new EventEmitter<AddStepInfo>();

  stepsToAdd = [
    {
      component: HospitalizationAddressItemComponent
    },
    {
      component: HospitalizationContactsItemComponent
    },
    {
      component: HospitalizationPeriodsItemComponent
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addStep() {
    this.addStepAfter.emit({
      afterStep: this.thisStep,
      stepsToAdd: this.stepsToAdd
    });
  }
}
