import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  formModel: any = {};
  formFields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First name'
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last name'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
