import {Component, Input} from '@angular/core';
import {SafeResourceUrl} from "@angular/platform-browser";


export interface  Workshop {
  title: string;
  description: string;
  author: string;
  authorDescription: string;
}
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  @Input() workshop: Workshop | undefined;
  showCards = false; // Initialize as true
  

  toggleCards() {
    this.showCards = !this.showCards; // Toggle the visibility
  }
}
