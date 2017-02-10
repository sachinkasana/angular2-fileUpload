/// <reference path="data.service.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DayPilot } from "daypilot-pro-angular";
//import { DataService, CreateEventParams, MoveEventParams } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    //@ViewChild("scheduler1")
    //scheduler: DayPilot.Angular.Scheduler;

    //events: any;

    //config: any = {
    //    timeHeaders: [
    //        { groupBy: "Month", format: "MMMM yyyy" },
    //        { groupBy: "Day", format: "d" }
    //    ],
    //    days: 30,
    //    startDate: "2017-30-01",
    //    scale: "Day",
    //    onTimeRangeSelected: args => {
    //        let name = prompt("New event name:", "Event");
    //        if (!name) {
    //            return;
    //        }
    //        let params: CreateEventParams = {
    //            start: args.start.toString(),
    //            end: args.end.toString(),
    //            text: name,
    //            resource: args.resource
    //        };
    //        this.ds.createEvent(params).subscribe(result => {
    //            this.events.push(result);
    //            this.scheduler.control.message("Event created");
    //        });
    //    },
    //    onEventMove: args => {
    //        let params: MoveEventParams = {
    //            id: args.e.id(),
    //            start: args.newStart.toString(),
    //            end: args.newEnd.toString(),
    //            resource: args.newResource
    //        };
    //        this.ds.moveEvent(params).subscribe(result => {
    //            this.scheduler.control.message("Event moved");
    //        });
    //    }
    //};

    //constructor(private ds: DataService) { }

    //ngAfterViewInit(): void {
    //    debugger;
    //    this.ds.getResources().subscribe(result => this.config.resources = [{"id": "7", "text": "Task 1", "start": "2017-01-30T00:00:00", "end": "2017-02-05T00:00:00", "resource": "2" }]);

    //    var from = this.scheduler.control.visibleStart();
    //    var to = this.scheduler.control.visibleEnd();
    //    this.ds.getEvents(from, to).subscribe(result => this.events = result);
    //}

  // ...

}
