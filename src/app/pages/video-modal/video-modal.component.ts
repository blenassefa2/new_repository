// video-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: 'video-modal.component.html',
  styleUrls: ['video-modal.component.css'],
})
export class VideoModalComponent {
  @Input() isOpen = false;
  @Input() videoUrl = '';
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
