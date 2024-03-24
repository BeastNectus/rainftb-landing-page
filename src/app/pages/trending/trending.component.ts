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

    products = [
        {
          "price": '2.75 ETH',
          "img": "../../../assets/img/nft.webp",
          "avatar": "../../../assets/img/Avatar Users2_10.svg",
          "time": "10 m 20 s left",
          "seller": "Jeep Auctions",
          "social": "@jeepauctions21"
        },
        {
          "name": "Martias Queenbeer",
          "price": '3.75 ETH',
          "img": "../../../assets/img/bitcoin.webp",
          "avatar": "../../../assets/img/Avatar Users2_11.svg",
          "time": "20 m 30 s left",
          "seller": "Car Luxy",
          "social": "@carluxy11"
        },
        {
          "price": '4.75 ETH',
          "img": "../../../assets/img/blockchain.webp",
          "avatar": "../../../assets/img/Avatar Users2_12.svg",
          "time": "30 m 40 s left",
          "seller": "Lambo Mind",
          "social": "@lambomind92"
        },
        {
          "price": '5.75 ETH',
          "img": "../../../assets/img/coin.webp",
          "avatar": "../../../assets/img/Avatar Users2_13.svg",
          "time": "40 m 50 s left",
          "seller": "Axios Legacy",
          "social": "@axioslegacy75"
        }
      ]
}
