import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hospitalization-contacts-item',
  templateUrl: './hospitalization-contacts-item.component.html',
  styleUrls: ['./hospitalization-contacts-item.component.scss']
})
export class HospitalizationContactsItemComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  formModel: any = {};
  formFields: FormlyFieldConfig[] = [
    {
      key: 'contacts',
      type: 'input',
      templateOptions: {
        label: 'Contacts'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
