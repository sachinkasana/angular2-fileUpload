import {DataService} from "../data.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {SchedulerComponent} from "./scheduler.component";
import {DayPilot} from "daypilot-pro-angular";
import {CreateComponent} from "./create.component";
import { EditComponent } from "./edit.component";
import { FileUploadComponent } from '../file-upload/file-upload.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule ],
  declarations: [
    DayPilot.Angular.Scheduler,
    DayPilot.Angular.Modal,
    SchedulerComponent,
    CreateComponent,
      EditComponent,
      FileUploadComponent
  ],
  exports:      [ SchedulerComponent ],
  providers:    [ DataService ]
})
export class SchedulerModule { }
