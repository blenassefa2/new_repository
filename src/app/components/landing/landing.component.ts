import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  activeButton: string = '';
  images: string[] = [
    'https://res.cloudinary.com/eskalate/image/upload/v1712136494/Hackathon/hackathon_coding.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1708613326/Hackathon/Expo.png',
    // 'https://picsum.photos/id/239/200/300',
    // 'https://picsum.photos/id/240/200/300',
    'https://res.cloudinary.com/eskalate/image/upload/v1712134753/Hackathon/certificateDay.jpg'
  ];

  setActiveButton(buttonName: string) {
    this.activeButton = buttonName;
  }
}
