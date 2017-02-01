import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { DayPilot } from 'daypilot-pro-angular';

@Injectable()
export class DataService {

    resources: any[] = [
        { name: "Resource 1", id: "R1" },
        { name: "Resource 2", id: "R2" }
    ];

    events: any[] = [
        {
            id: "1",
            resource: "R1",
            start: "2017-01-03",
            end: "2017-01-15",
            text: "Event 1"
        }
    ];

    constructor(private http: Http) {
    }

    getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
        return Observable.of(this.events);
        // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString()).map((response:Response) => response.json());
    }

    getResources(): Observable<any[]> {
        return Observable.of(this.resources);
        // return this.http.get("/api/resources").map((response:Response) => response.json());
    }

    createEvent(data: CreateEventParams): Observable<EventData> {
        let e: EventData = {
            start: data.start,
            end: data.end,
            resource: data.resource,
            id: DayPilot.guid(),
            text: data.text
        };

        return Observable.of(e);
        //return this.http.post("/api/events/create", data).map((response:Response) => response.json());
    }

    updateEvent(data: DayPilot.Event): Observable<any> {
        console.log("Updating event: " + data.text());
        console.log(data);
        return Observable.of({ result: "OK" });
    }

}


export interface CreateEventParams {
    start: string;
    end: string;
    text: string;
    resource: string | number;
}

export interface UpdateEventParams {
    id: string | number;
    start: string;
    end: string;
    text: string;
    resource: string | number;
}

export interface EventData {
    id: string | number;
    start: string;
    end: string;
    text: string;
    resource: string | number;
}
