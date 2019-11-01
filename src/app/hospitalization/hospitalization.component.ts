import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AddStepInfo, Step } from '../app.component';
import { HospitalizationItemComponent } from '../hospitalization-item/hospitalization-item.component';

@Component({
  selector: 'app-hospitalization',
  templateUrl: './hospitalization.component.html',
  styleUrls: ['./hospitalization.component.scss']
})
export class HospitalizationComponent implements OnInit {

  @Input() thisStep : Step;
  @Input() lala: string;
  @Output() addStepAfter = new EventEmitter<AddStepInfo>()

  constructor() { }

  ngOnInit() {
  }

  addStep(){
    this.addStepAfter.emit({
      afterStep: this.thisStep,
      stepToAdd: {
        component: HospitalizationItemComponent
      }
    })
  }
}
