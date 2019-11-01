import { Component, TemplateRef } from '@angular/core';
import { HospitalizationComponent } from './hospitalization/hospitalization.component';
import { NameComponent } from './name/name.component';
import { FinishedComponent } from './finished/finished.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meldeportal';

  steps: Step[] = [
    { component: NameComponent, },
    { component: HospitalizationComponent, inputs: { lala: 'uh yeah!' } },
    { component: FinishedComponent }
  ];

  outputs = {
    addStepAfter: (info: AddStepInfo) => {
      const afterIndex = this.steps.indexOf(info.afterStep);
      this.steps.splice(afterIndex + 1, 0, ...info.stepsToAdd);
    }
  };

  getInput(step: Step) {
    return { thisStep: step, ...step.inputs };
  }
}

export interface Step {
  component: any;
  inputs?: any;
}

export interface AddStepInfo {
  stepsToAdd: Step[];
  afterStep: Step;
}
