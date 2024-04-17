import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  Input,
  HostListener,
  OnInit
} from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showMenu: boolean = false;
 

  constructor(private elRef: ElementRef,private modalService: ModalService) {}



 
  showModal: boolean = false;
  showChat = false;
  showMentorsModal = false;
  showAdvisorsModal = false;
  mentorsRegistrationLink = 'https://form.typeform.com/to/UvayCDEJ';
  advisorsRegistrationLink = 'https://form.typeform.com/to/mMzeQ63l';
  showGetInvolvedModal = true;
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  currentSection: string = 'home';
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59);
  registrationButtonVisible = false;
  countDownVisible = true;
  countDownDate = new Date('2023-11-11T20:59:00');
  animated: boolean = false;

  ngOnInit(): void {
    this.checkElementsInView();

    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
    setInterval(() => {
      this.updateCountDownVisibility();
    }, 1000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkElementsInView();
  }

  checkElementsInView(): void {
    const component = this.elRef.nativeElement.querySelector('#home_component');
    const rect = component.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

    if (!this.animated && isInViewport) {
      this.animated = true;
    } else if (!isInViewport) {
      this.animated = false;
    }

    // const ach_component = this.elementRef.nativeElement.querySelector('#ach');
    // const ach_rect = ach_component.getBoundingClientRect();
    // const achIsInViewport = ach_rect.top < window.innerHeight && ach_rect.bottom >= 0;

    // if (!this.ach_animated && achIsInViewport) {
    //   this.ach_animated = true;
    // } else if (!achIsInViewport) {
    //   this.ach_animated = false;
    // }
  }

  openModal(event: Event) {
    console.log('openModal home is clicked');
    
    event.stopPropagation();
    this.modalService.openModal();
  }
  get isModalOpen(): boolean {
    return this.modalService.isModalOpen;
  }


  day_desc = [
    {
      day : 'Day 1',
      desc : "Experience innovation firsthand as finalists showcase their groundbreaking projects to the public at Abrehot Library in Addis Ababa.",
    },
    {
      day : "Day 2",
      desc : "The stakes are high at the Jury Panel. Witness the excitement of the award ceremony where the most innovative solutions will be honored and celebrated.",
    },
    {
      day : "Day 3",
      desc : "Beginning with an in-person investor panel in the morning followed by a remote panel in the afternoon, designed to propel the best African AI ventures onto the global stage."
    }
  ]

  onShowModal() { 
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden', 'z-0');
  }
  updateCountDownVisibility() {
    const now = new Date();
    this.countDownVisible = now < this.countDownDate;
  }

 
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showTeamRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
    document.getElementById('partners')?.classList.add('hidden');
    document.getElementById('partners')?.classList.add('hidden');
    document.getElementById('info')?.classList.add('hidden');
    document.getElementById('judges')?.classList.add('hidden');
    document.getElementById('eligibility')?.classList.add('hidden');
    document.getElementById('about-us')?.classList.add('hidden');
    document.getElementById('footer')?.classList.add('hidden');
    document.getElementById('workshops')?.classList.add('hidden');
  }

  onRegisterIndividual() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
    document.getElementById('partners')?.classList.add('hidden');
    document.getElementById('info')?.classList.add('hidden');
    document.getElementById('judges')?.classList.add('hidden');
    document.getElementById('eligibility')?.classList.add('hidden');
    document.getElementById('about-us')?.classList.add('hidden');
    document.getElementById('footer')?.classList.add('hidden');
    document.getElementById('workshops')?.classList.add('hidden');
  }

  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
  }

  onShowAdvisorsModal() {
    this.toggleChatEvent.emit(false);
    this.showAdvisorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
  }

  onHideModal() {
    this.toggleChatEvent.emit(true);
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showRegistrationModal = true;
    this.showMentorsModal = false;
    this.showAdvisorsModal = false;
    this.showTeamRegistrationModal = false;
    this.showIndividualRegistrationModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.remove('z-0');
    document.getElementById('prizes')?.classList.add('z-40');
    document.getElementById('partners')?.classList.remove('hidden');
    document.getElementById('info')?.classList.remove('hidden');
    document.getElementById('judges')?.classList.remove('hidden');
    document.getElementById('eligibility')?.classList.remove('hidden');
    document.getElementById('about-us')?.classList.remove('hidden');
    document.getElementById('footer')?.classList.remove('hidden');
    document.getElementById('workshops')?.classList.remove('hidden');
  }

  scrollDown(): void {
    const canNavigate: boolean =
      !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('prizes');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean =
      !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}





  

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   // Check if the click is outside the modal and app bar
  //   // if (!this.isClickWithinModalOrAppBar(event)) {
  //     this.closeModal();
  //   // }
  // }

  // // Check if the click is within the modal or app bar
  // private isClickWithinModalOrAppBar(event: MouseEvent): boolean {
  //   const modalElement = document.querySelector('.modal-container');
  //   // const appbarElement = document.querySelector('.appbar');
  
  //   if (modalElement) {
  //     return (
  //       modalElement.contains(event.target as Node) 
  //       // appbarElement.contains(event.target as Node)
  //     );
  //   }
  
  //   return true; // Return false if either element is null or undefined
  // }



