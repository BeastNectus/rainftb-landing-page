import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopularComponent {
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
          "name": "Rondo Alexander",
          "follower": '9.4m followers',
          "img": "../../../assets/img/nft.webp",
          "avatar": "../../../assets/img/Avatar Users2_16.svg"
        },
        {
          "name": "Martias Queenbeer",
          "follower": '10m followers',
          "img": "../../../assets/img/bitcoin.webp",
          "avatar": "../../../assets/img/Avatar Users2_17.svg"
        },
        {
          "name": "Tifanny Whites",
          "follower": '7m followers',
          "img": "../../../assets/img/blockchain.webp",
          "avatar": "../../../assets/img/Avatar Users2_15.svg"
        },
        {
          "name": "Yu Zhong",
          "follower": '20m followers',
          "img": "../../../assets/img/coin.webp",
          "avatar": "../../../assets/img/Avatar Users2_18.svg"
        }
      ]
}
