import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatStepperModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DynamicModule } from 'ng-dynamic-component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalizationComponent } from './hospitalization/hospitalization.component';
import { NameComponent } from './name/name.component';
import { FinishedComponent } from './finished/finished.component';
import { HospitalizationAddressItemComponent } from './hospitalization-address-item/hospitalization-address-item.component';
import { HospitalizationContactsItemComponent } from './hospitalization-contacts-item/hospitalization-contacts-item.component';
import { HospitalizationPeriodsItemComponent } from './hospitalization-periods-item/hospitalization-periods-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalizationComponent,
    NameComponent,
    FinishedComponent,
    HospitalizationAddressItemComponent,
    HospitalizationContactsItemComponent,
    HospitalizationPeriodsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    DynamicModule.withComponents(
      [
        NameComponent,
        HospitalizationComponent,
        HospitalizationAddressItemComponent,
        HospitalizationContactsItemComponent,
        HospitalizationPeriodsItemComponent,
        FinishedComponent
      ]
    ),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
