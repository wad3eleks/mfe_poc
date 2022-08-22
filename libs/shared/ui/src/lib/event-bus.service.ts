import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';

export interface EventData {
  name: string;
  payload?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EventData>();

  emit(event: EventData) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e) => e.name === eventName),
        map((e) => e.payload)
      )
      .subscribe(action);
  }
}
