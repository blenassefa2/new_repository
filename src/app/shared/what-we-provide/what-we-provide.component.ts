import { Component,OnInit,OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-what-we-provide',
  templateUrl: './what-we-provide.component.html',
  styleUrls: ['./what-we-provide.component.css']
})

export class WhatWeProvideComponent {

  constructor(private modalService: ModalService) {}

  get isModalOpen(): boolean {
    return this.modalService.isModalOpen;
  }

  // Other methods and logic in your component
}
