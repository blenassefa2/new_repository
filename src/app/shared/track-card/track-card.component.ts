import {Component, Input} from '@angular/core';

export interface Track {
  title: string;
  description: string;
  prize: string;
}
@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent {
  @Input() track: Track | undefined;
}
