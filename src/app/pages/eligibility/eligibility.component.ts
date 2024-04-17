import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {

  @Output() openChatEvent = new EventEmitter<void>()
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)
  registrationButtonVisible = true;
  ngOnInit(): void {
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  openChat(){
    this.openChatEvent.emit()
  }

  criterieas = [
    {text: "Every team must have a minimum of 3 members and a maximum of 5 members."},
    {text: "Every team member must be located in Africa."},
    {text: "All team members must be students currently enrolled in a University or College (undergrad, Associates, Diploma program), or High School throughout the entirety of the hackathon. Students who are currently pursuing or have completed their Master's degree or higher are not eligible to participate."}
  ]

}
