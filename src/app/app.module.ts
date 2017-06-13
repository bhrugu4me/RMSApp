import 'pace';

import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ADAL4Service } from 'adal-angular4';
import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent
      ],
  imports: [
    BrowserModule,FormsModule,DataTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing   
  ],
  providers: [AppConfig,ADAL4Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
