import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mentors-registration',
  templateUrl: './mentors-registration.component.html',
  styleUrls: ['./mentors-registration.component.css']
})
export class MentorsRegistrationComponent {
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
