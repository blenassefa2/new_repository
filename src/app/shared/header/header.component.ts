import { Component, Input,HostListener,ElementRef, } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = 'home';

  constructor(private elRef: ElementRef,private modalService : ModalService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  
  openModal(event: Event) {
    event.stopPropagation();
    this.modalService.openModal();
  }
  
  

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}




//  import { Component, Input,HostListener,ElementRef, } from '@angular/core';
// import { ModalService } from 'src/app/modal.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   showMenu: boolean = false;
//   @Input() currentSection: string = 'home';

//   constructor(private elRef: ElementRef,private modalService: ModalService) {}

//   toggleMenu() {
//     this.showMenu = !this.showMenu;
//   }

//   openModal() {
//     console.log('header');
    
//     this.modalService.openModal();
//     document.body.addEventListener('click', this.handleOutsideClick.bind(this));
//   }

//   closeModal() {
//     this.modalService.closeModal();
//     document.body.removeEventListener('click', this.handleOutsideClick.bind(this));
//   }

//   private handleOutsideClick(event: Event) {
//     if (!this.modalService.getModalState()) {
//       document.body.removeEventListener('click', this.handleOutsideClick.bind(this));
//     }
//   }
//   isModalOpen(): boolean {
//     return this.modalService.getModalState();
//   }

//   // @HostListener('document:click', ['$event'])
//   // onDocumentClick(event: MouseEvent) {
//   //   // Check if the click is outside the modal and app bar
//   //   // if (!this.isClickWithinModalOrAppBar(event)) {
//   //     this.closeModal();
//   //   // }
//   // }

//   // // Check if the click is within the modal or app bar
//   // private isClickWithinModalOrAppBar(event: MouseEvent): boolean {
//   //   const modalElement = document.querySelector('.modal-container');
//   //   // const appbarElement = document.querySelector('.appbar');
  
//   //   if (modalElement) {
//   //     return (
//   //       modalElement.contains(event.target as Node) 
//   //       // appbarElement.contains(event.target as Node)
//   //     );
//   //   }
  
//   //   return true; // Return false if either element is null or undefined
//   // }

//   scrollToSection(sectionId: string): void {
//     this.currentSection = sectionId;
//     const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
//     const element = document.getElementById(sectionId);
//     if (element != null && canNavigate) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }


// }

