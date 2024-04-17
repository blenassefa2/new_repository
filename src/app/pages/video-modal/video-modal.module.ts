import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal.component';

@NgModule({
  declarations: [VideoModalComponent],
  imports: [CommonModule],
  exports: [VideoModalComponent], // Export the component so it can be used in other modules
})
export class VideoModalModule {}