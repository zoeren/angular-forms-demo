import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hospitalization-periods-item',
  templateUrl: './hospitalization-periods-item.component.html',
  styleUrls: ['./hospitalization-periods-item.component.scss']
})
export class HospitalizationPeriodsItemComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  formModel: any = {};
  formFields: FormlyFieldConfig[] = [
    // {
    //   key: 'firstName',
    //   type: 'input',
    //   templateOptions: {
    //     label: 'First name'
    //   }
    // },
    {
      key: 'periods',
      type: 'input',
      templateOptions: {
        label: 'Periods'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
