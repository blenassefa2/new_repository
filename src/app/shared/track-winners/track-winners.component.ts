import { Component, OnInit,Renderer2,EventEmitter, Input, Output } from '@angular/core';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';
import { CloudinaryService } from './../../cloudinary.service';

@Component({
  selector: 'app-track-winners',
  templateUrl: './track-winners.component.html',
  styleUrls: ['./track-winners.component.css'],
})
export class TrackWinners  {

  @Input() title: string = "";
  @Input() winners: any[] = [];
  @Input() descr: string = ""
  @Output() cardTouched = new EventEmitter<any>();

  onMoreOptionsClick(cardData: any) {
    this.cardTouched.emit(cardData); // Emit the card data to the parent component
  }
  // track_winners: any[] = [];
  // sapphire!: CloudinaryImage;
  // architect_img!: CloudinaryImage;
  // yyeni!: CloudinaryImage;

  // isModalOpen : boolean = false;
  // modalContent : any = {}

  constructor(private cloudinaryService: CloudinaryService,private renderer: Renderer2) {}
  
  // openModal(winnerData: any) {
  //   this.modalContent = winnerData;
  //   this.isModalOpen = true;
  //   this.renderer.addClass(document.body, 'overflow-hidden');
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  //   this.renderer.removeClass(document.body, 'overflow-hidden');
  // }



  // ngOnInit(): void {
  //   // this.kurio_img = this.cloudinaryService.generateImageUrl('gallery/imag.png');
  //   this.sapphire =
  //     this.cloudinaryService.generateImageUrl('Hackathon/sapphire');
  //   this.architect_img = this.cloudinaryService.generateImageUrl(
  //     'Hackathon/Architect'
  //   );
  //   this.yyeni = this.cloudinaryService.generateImageUrl('Hackathon/yyeni');

  //   this.track_winners = [
  //     {
  //       teamMembers: [
  //         'Aser Hailu',
  //         'Biruk Mesfin',
  //         'Bisrat Kebere',
  //         'Duresa Feyisa',
  //         'Estifanos Samson',
  //       ],
  //       prize_type: 'Best Technical Implementation Award',
  //       money: '2,500',
  //       team: 'Innovate Fusion',
  //       projectname: 'THE ARCHITECT AI',
  //       prize_description:
  //         'Congratulations to Team Innovate Fusion from Ethiopia! We proudly acknowledge the ARCHITECT AI project, which stood out for its remarkable and innovative technical implementation.',
  //       rank: 1,
  //       awrd_img: 'assets/gold 1 (no bg).png',
  //       img: 'https://res.cloudinary.com/eskalate/image/upload/v1700743904/Hackathon/Architect.jpg',
  //       // img : this.architect_img,
  //       teamImage: [
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/aserr.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/birukk.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/bisratt.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/duresaa.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/estifanos.png',
  //       ],
  //       //   projectname: 'THE ARCHITECT AI',
  //       description:
  //         'Virtual architectural design assistant that uses generative AI to generate customizable and sustainable skyscraper designs for architecture and construction projects in Africa.',
  //       countries: ['Ethiopia'],
  //       //   category : 'Personalized Assistance',
  //       demo: 'https://www.youtube.com/embed/irHZkTfRL2c?si=1g-5WDz6Bx1L39zS',
  //       pitch: 'https://www.youtube.com/embed/AvpUPbTf7HE?si=7USncKJOg2-K1_8Q',
  //       webUrl: 'https://architect-ai-theta.vercel.app/home',
  //       mobileUrl:
  //         'https://drive.google.com/file/d/1E7CKANKvaY6yh-VKgUTdcSc6QxCS8K6r/view?usp=drive_link',
  //       linkedin: [
  //         'https://www.linkedin.com/in/aser-hailu',
  //         'https://www.linkedin.com/in/biruk-mesfin',
  //         'https://www.linkedin.com/in/bisry',
  //         'https://www.linkedin.com/in/duresa-feyisa-513271256',
  //         'https://www.linkedin.com/in/estifanos-samson-7286bb298',
  //       ],
  //     },
  //     {
  //       teamMembers: [
  //         'Miriam Shikongo',
  //         'Vitalis P Haupindi',
  //         'Lotto N Nanghonda Jr',
  //       ],
  //       prize_type: 'Most Potential for Positive Change Award',
  //       money: '2,500',
  //       prize_description:
  //         'Congratulations to Team YYeni AI from Namibia! We commend the YYeni AI project, which stood out for its exceptional potential to make a positive impact and drive meaningful change.',
  //       projectname: 'YYeni AI',
  //       team: 'YYeni AI',
  //       awrd_img: 'assets/gold 1 (no bg).png',
  //       rank: 1,
  //       img: 'https://res.cloudinary.com/eskalate/image/upload/v1700746297/Hackathon/yyeni.jpg',
  //       // img : this.yyeni,
  //       countries: ['Namibia'],
  //       description:
  //         'AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content. ',
  //       teamImage: [
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/Onee.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Twoo.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Threee.png',
  //       ],
  //       demo: 'https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-',
  //       pitch: 'https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0',
  //       webUrl: 'https://yyenichat.com/',
  //       linkedin: [
  //         'https://www.linkedin.com/in/miriam-shikongo-41b2a8224',
  //         'https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216',
  //         'https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247',
  //       ],
  //     },
  //     {
  //       teamMembers: [
  //         'Ann Mumbi',
  //         'Franklin Karanja',
  //         "Jude Ang'Edu",
  //         'Nathan Mbugua',
  //         'Wayne Asava',
  //       ],
  //       prize_type: 'Best User Experience Award',
  //       money: '2,500',
  //       awrd_img: 'assets/gold 1 (no bg).png',
  //       team: 'Sapphire',
  //       projectname: 'StoryCraft',
  //       prize_description:
  //         'Congratulations to Team Sapphire from Kenya! We applaud the outstanding achievement of the StoryCraft project, which was recognized for delivering an exceptional and intuitive user experience.',
  //       rank: 1,
  //       img: 'https://res.cloudinary.com/eskalate/image/upload/v1700835115/Hackathon/sapphire.jpg',
  //       // img:this.sapphire,
  //       teamImage: [
  //         // https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/frank.png
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/ann.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/frank.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/jude.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/nathan.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/wayne.png',
  //       ],
  //       //   projectname: 'StoryCraft',
  //       //   teamImage: [
  //       //     'assets/yyeni/one.png',
  //       //     'assets/yyeni/two.png',
  //       //     'assets/yyeni/three.png',
  //       //   ],
  //       description:
  //         'AI-powered platform that creates personalized and engaging storybooks for early readers, fostering a love for reading among children.',
  //       countries: ['Kenya'],
  //       //   category : 'AI-driven Artistry and Innovation',
  //       demo: 'https://www.youtube.com/embed/YHBCz0VNjaA?si=AJHna8gKMUX8EAiR',
  //       pitch: 'https://www.youtube.com/embed/d5vJMWklKpM?si=DgSCAMdTxeb99GsK',
  //       webUrl: 'http://www.storycraftai.tech/',
  //       linkedin: [
  //         'https://www.linkedin.com/in/ann-kamau-564b88216',
  //         'https://www.linkedin.com/in/knurf-mutua',
  //         'https://www.linkedin.com/in/jude-ang-edu-451532185',
  //         '#',
  //         'https://www.linkedin.com/in/wayneasava',
  //       ],
  //     },
  //     {
  //       teamMembers: [
  //         'Miriam Shikongo',
  //         'Vitalis P Haupindi',
  //         'Lotto N Nanghonda Jr',
  //       ],
  //       prize_type: 'Cross-Domain Collaboration Award',
  //       projectname: 'YYeni AI',
  //       team: 'YYeni AI',
  //       prize_description:
  //         'Congratulations to Team YYeni AI from Namibia! The YYeni project effectively combined generative AI techniques with expertise from different fields, showcasing an innovative approach.',
  //       money: '2,500',
  //       rank: 1,
  //       awrd_img: 'assets/gold 1 (no bg).png',
  //       // img: this.yyeni,
  //       img: 'https://res.cloudinary.com/eskalate/image/upload/v1700746297/Hackathon/yyeni.jpg',
  //       countries: ['Namibia'],
  //       description:
  //         'AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content. ',
  //       teamImage: [
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/one.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/two.png',
  //         'https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/three.png',
  //       ],
  //       demo: 'https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-',
  //       pitch: 'https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0',
  //       webUrl: 'https://yyenichat.com/',
  //       linkedin: [
  //         'https://www.linkedin.com/in/miriam-shikongo-41b2a8224',
  //         'https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216',
  //         'https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247',
  //       ],
  //     },
  //   ];
  // }

  // getRankClass(rank: number) {
  //   switch (rank) {
  //     case 1:
  //       return 'bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500  '; // Replace with your desired Tailwind class for rank 1
  //     case 2:
  //       return ' bg-gradient-to-r from-gray-300 to-gray-50 text-gray-500  '; // Replace with your desired Tailwind class for rank 2
  //     case 3:
  //       return ' from-[#cd7f32] to-orange-500 text-gray-100  '; // Replace with your desired Tailwind class for rank 3
  //     default:
  //       return 'bg-gray-200'; // Default background color for other ranks
  //   }
  // }
  // getCardText(rank: number) {
  //   switch (rank) {
  //     case 1:
  //       return ' text-amber-200 '; // Replace with your desired Tailwind class for rank 1
  //     case 2:
  //       return ' text-gray-200 '; // Replace with your desired Tailwind class for rank 2
  //     case 3:
  //       return ' text-bronze-200  '; // Replace with your desired Tailwind class for rank 3
  //     default:
  //       return 'bg-gray-200'; // Default background color for other ranks
  //   }
  // }
}
