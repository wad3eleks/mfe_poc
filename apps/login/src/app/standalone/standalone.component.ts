import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mfe-poc-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent {
  @Input() header = '';
}
