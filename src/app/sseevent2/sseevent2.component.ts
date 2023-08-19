import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {Subscription} from "rxjs";
import {SseServiceService} from "../service/sse-service.service";

@Component({
  selector: 'app-sseevent2',
  templateUrl: './sseevent2.component.html',
  styleUrls: ['./sseevent2.component.css']
})
export class Sseevent2Component {
  events: string[] = [];
  private eventSubscription!: Subscription;

  constructor(private sseService: SseServiceService, private cdRef: ChangeDetectorRef, private ngZone: NgZone) {
  }


  ngOnInit() {
    this.eventSubscription = this.ngZone.run(() =>
      this.sseService.getEvents().subscribe(
        (event: MessageEvent) => {
          this.events.push(event.data);
          console.log(this.events);
          this.cdRef.detectChanges();
        },
        error => {
          console.error('Error in SSE connection:', error);
        }
      )
    );
  }


  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
