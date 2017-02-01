/// <reference path="scheduler/scheduler.module.ts" />
/// <reference path="data.service.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DayPilot } from "daypilot-pro-angular";
import { DataService } from './data.service';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerModule } from "./scheduler/scheduler.module";
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
      AppComponent,
     // FileUploadComponent
     // DayPilot.Angular.Scheduler,
      //SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      SchedulerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
