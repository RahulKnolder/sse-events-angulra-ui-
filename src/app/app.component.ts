import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';

import { SseClient } from 'ngx-sse-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eventList: string[] = [];
  constructor(private sseClient: SseClient) {
    this.sseClient.stream('http://52.149.247.168/v1/data/stream-sse', { keepAlive: true, reconnectionDelay: 1_000, responseType: 'event' }, undefined, 'GET').subscribe((event) => {
      if (event.type === 'error') {
        const errorEvent = event as ErrorEvent;
        console.error(errorEvent.error, errorEvent.message);
      } else {
        const messageEvent = event as MessageEvent;
        console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
        this.eventList.push(messageEvent.data);
        console.log(messageEvent.data);
      }
    });
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}

