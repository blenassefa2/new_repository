import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-winner_modal',
  templateUrl: './winner_modal.component.html',
  styleUrls: ['./winner_modal.component.css'],
})
export class WinnerModal {
  @Input() showModal: boolean = false;
  @Input() modalData: any = {};
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
