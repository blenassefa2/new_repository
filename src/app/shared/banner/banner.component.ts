import { Component } from '@angular/core';

export interface Prize {
  place: string,
  prize: string,
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

}
