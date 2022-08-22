import { Component, OnInit } from '@angular/core';
import { EventBusService, EventData } from '@mfe-poc/shared/ui';

@Component({
  selector: 'mfe-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(
    private eventBusService: EventBusService
  ) {

  }

  ngOnInit() {
    this.eventBusService.on('dashboard', (data: EventData) => {
      console.log('SHELL SUBSCRIBER', data);
    })
  }
}
