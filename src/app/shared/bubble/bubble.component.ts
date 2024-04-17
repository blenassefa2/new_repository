import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent {
  isIframeLoading: boolean = true;
  onIframeLoad() {
    console.log("iframe loaded")
    this.isIframeLoading = false;
  }
}
