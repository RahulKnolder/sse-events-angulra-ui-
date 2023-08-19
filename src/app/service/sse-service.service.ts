import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SseServiceService {

  constructor(private http: HttpClient) { }

  private eventsUrl = 'http://localhost:8080/api/product/events';
  // private eventsUrl = 'http://localhost:8080/api/product/stream-sse';

  getEvents(): Observable<MessageEvent> {
    return new Observable(observer => {
      const eventSource = new EventSource(this.eventsUrl);
      eventSource.onmessage = event => {
        observer.next(event);
      };
      eventSource.onerror = error => {
        observer.error(error);
      };

      // Return a cleanup function to close the connection when unsubscribed
      return () => {
        eventSource.close();
      };
    });
  }



  }
