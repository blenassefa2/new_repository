import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-advisors-registration',
  templateUrl: './advisors-registration.component.html',
  styleUrls: ['./advisors-registration.component.css']
})
export class AdvisorsRegistrationComponent {
  @Input() showModal: boolean = false;
  @Input() registrationLink: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;

  constructor() {

  }

  closeModal(){
    this.closeModalEvent.emit()
    this.isIframeLoading = true;
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
}
