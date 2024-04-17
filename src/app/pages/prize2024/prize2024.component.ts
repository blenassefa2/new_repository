import { Component } from '@angular/core';

@Component({
  selector: 'app-prize2024',
  templateUrl: './prize2024.component.html',
  styleUrls: ['./prize2024.component.css']
})

export class Prize2024Component {
  awards = [
    "Trip to Addis Ababa, including airfare, hotel, and other expenses.",
    "Opportunity to pitch one's project idea to renowned individuals and venture capitalists.",
    "Certificate of achievement."
  ]
  missionTextPart1 = "A2SV (Africa to Silicon Valley) is a US-based nonprofit academy igniting Africa's tech revolution with comprehensive software engineering training and tech-driven solutions"
  missionTextPart2 = "Through collaborations with top African universities and tech titans, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is free, breaking financial barriers, nurturing dreams, and democratizing the path to a tech-driven future."
  secondPrize = {
    place: 'Second',
    prize: '6,000',
    padding: '32px',
    color: '#FFC876',
    image: 'assets/silver 1 (no bg).png',
    awards: [...this.awards, "Custom-designed A2SV swag."]
  }
   firstPrize = {
    place: 'First',
    prize: '10,000',
    padding: '32px',
    color: '#AC6AFF',
    image: 'assets/gold 1 (no bg).png',
    awards: [...this.awards,"Direct placement opportunity in the A2SV education cohort 5.", "Custom-designed A2SV swag."]
    }

    thirdPrize = {
    place: 'Third',
    prize: '4,000',
    padding: '32px',
    color: '#E298FF',
    image: 'assets/bronze 1.png',
    awards: this.awards
    }

    tracks = [
      {
        title: 'Best Technical Implementation Award',
        description: 'Recognizes the project with the most impressive and innovative technical implementation.',
        prize: '2500',
      },
      {
        title: 'Most Potential for Positive Change Award',
        description: 'Highlights the project that shows the greatest potential for making a positive impact and driving change.',
        prize: '2500',
      },
      {
        title: 'Best User Experience Award',
        description: 'Rewards the project that delivers an exceptional and intuitive user experience.',
        prize: '2500',
      },
      {
        title: 'Cross-Domain Collaboration Award',
        description: 'Acknowledges teams that effectively combine generative AI techniques with expertise from different fields.',
        prize: '2500'
      }
    ];

    prizes = [this.secondPrize, this.firstPrize, this.thirdPrize];
}