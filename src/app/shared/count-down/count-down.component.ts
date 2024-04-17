import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent {
  targetDate: Date;
  daysLeft: number | undefined;
  hoursLeft: number | undefined;
  minutesLeft: number | undefined;
  secondsLeft: number | undefined;
  semiFinalDate: Date;
  eventDate = 'November 11';
  eventText = 'Our hackathon grand finale will start on';
  eventTime = '10:00 AM EAT';

  constructor() {
    this.targetDate = new Date('2023-11-11T10:00:00');
    this.semiFinalDate = new Date('2023-11-11T10:00:00');
  }

  chooseTargetDate(): number {
    const currentDate = new Date().getTime();
    if (currentDate < this.targetDate.getTime()) {
      return this.targetDate.getTime();
    } else {
      this.eventDate = 'November 11';
      this.eventText = 'Our hackathon grand finale will be over on';
      this.eventTime = '10:00 AM EAT';
      return this.semiFinalDate.getTime();
    }
  }

  ngOnInit(): void {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft(): void {
    const currentDate = new Date();
   

    const timeDifference = this.chooseTargetDate() - currentDate.getTime();

    // this.daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    // console.log('days left',this.daysLeft);
    // this.hoursLeft = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    // this.minutesLeft = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    // this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
    this.daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutesLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }

  protected readonly Number = Number;
}

// urrent Date  1698147356059  end Date 1701172800000
