import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hospitalization-address-item',
  templateUrl: './hospitalization-address-item.component.html',
  styleUrls: ['./hospitalization-address-item.component.scss']
})
export class HospitalizationAddressItemComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  formModel: any = {};
  formFields: FormlyFieldConfig[] = [
    {
      key: 'institutionName',
      type: 'input',
      templateOptions: {
        label: 'Name of institution'
      }
    },
    {
      key: 'street',
      type: 'input',
      templateOptions: {
        label: 'Street'
      }
    },
    {
      key: 'number',
      type: 'input',
      templateOptions: {
        label: 'Number'
      }
    },
    {
      key: 'zip',
      type: 'input',
      templateOptions: {
        label: 'Zip code'
      }
    },
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'City'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
