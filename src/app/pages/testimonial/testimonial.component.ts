import { CommonModule } from '@angular/common';
import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialComponent {
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

    infos = [
        {
          "name": "Sackie Jones Rio",
          "role": 'Web Developer at Brizzy',
          "rating": "4.5",
          "description": "“Platform NFT Marketplace terbaik yang miliknya pengguna mendapatkan banyak manfaat dan banyak bermunculan seperti pasar sebagus RAINFTB ini.”",
          "img": "../../../assets/img/man.jpg"
        },
        {
          "name": "Jeremy Ray Krondoz",
          "role": 'Backend Developer at Maxim',
          "rating": "4.6",
          "description": "“Esta es la mejor plataforma de NFT Marketplace duile pertenece los usuarios obtienen muchos benefios y muchos parecen mercado, pero ninguno bueno.”",
          "img": "../../../assets/img/man-2.jpg"
        },
        {
          "name": "Alexander Sarabia",
          "role": 'Frontend Developer at Axios',
          "rating": "4.7",
          "description": "“This is the best NFT Marketplace platform which his user get lot of benefits and lots of popping up such a marketplace but none as good as this RAINFTB.”",
          "img": "../../../assets/img/lady.jpg"
        }
      ]
}
