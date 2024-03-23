import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrendingComponent {
    // spaceBetween:number = 100;
    slidesPerView:number = 3;
    screenWidth!: number;

    @HostListener('window:resize')      
    getScreenWidth() {
        this.screenWidth = window.innerWidth;
        if(this.screenWidth >= 320 && this.screenWidth <= 480){
            this.slidesPerView = 1
            // this.spaceBetween = 50
        }
        else if(this.screenWidth >= 480 && this.screenWidth <= 992){
            this.slidesPerView = 2
            // this.spaceBetween = 70
        }
        else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
            this.slidesPerView = 3
            // this.spaceBetween = 100
        }
    }
}
