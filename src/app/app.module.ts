import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { HospitalizationComponent } from './hospitalization/hospitalization.component';
import { NameComponent } from './name/name.component';
import { FinishedComponent } from './finished/finished.component';
import { HospitalizationItemComponent } from './hospitalization-item/hospitalization-item.component'
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalizationComponent,
    NameComponent,
    FinishedComponent,
    HospitalizationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    DynamicModule.withComponents([NameComponent, HospitalizationComponent, HospitalizationItemComponent, FinishedComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
