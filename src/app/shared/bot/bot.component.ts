import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ChatService} from "../../shared/chat-service.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {LocalStorageService} from "../local-storage.service";
import {takeUntil} from "rxjs";

export interface Message{
  role: string,
  content: string
}
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css'],
})
export class BotComponent {
  constructor( private chatService: ChatService, private localStorageService: LocalStorageService) {
    this.localStorageService.seedData()
    this.localStorageService._waitingResponse$.subscribe((waitingStatus)=>{
      this.isChatLoading = waitingStatus
    })
    this.localStorageService._myData$.subscribe((messages)=>{
      this.messages = messages
    })
  }

  isChatLoading: boolean = false;
  messages: Message[] = [];
  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required])
  })

  @Output() closeChatEvent = new EventEmitter<void>()
  @ViewChild('scrollableContainer') private scrollableContainer: ElementRef | undefined;
  @ViewChild('fullScreenScrollableContainer') private fullScreenScrollableContainer: ElementRef | undefined;

  closeChat(){
    this.closeChatEvent.emit()
  }

  sendMessage(){
    this.isChatLoading = true;
    this.localStorageService.addMessage({
      role:"user",
      content: this.chatForm.value.message!
    })
    this.localStorageService.setWaitingStatus( true )
    try{
      this.chatService.sendMessage( this.chatForm.value.message! ).subscribe((response:any)=>{
        console.log(response)
        this.isChatLoading = false;
        this.localStorageService.setWaitingStatus( false )
        this.localStorageService.addMessage({
          role:"bot",
          content: response.message
        })
      });
    }catch (e){
      this.isChatLoading = false
    }
    this.chatForm.reset();
  }
}

