import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

type Auction = {
    title: string
    collection: string
    price: string
    img: string
    avatar: string
    time: string
    seller: string
}

@Component({
    selector: 'app-trending',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './trending.component.html',
    styleUrl: './trending.component.scss',
})
export class TrendingComponent {
    products: Auction[] = [
        {
            title: 'Prism Genesis #08',
            collection: 'Chromatic Vault',
            price: '2.75 ETH',
            img: 'assets/img/nft.webp',
            avatar: 'assets/img/Avatar Users2_10.svg',
            time: '10m 20s',
            seller: 'Jeep Auctions',
        },
        {
            title: 'Satoshi Signal #14',
            collection: 'Chain Relics',
            price: '3.75 ETH',
            img: 'assets/img/bitcoin.webp',
            avatar: 'assets/img/Avatar Users2_11.svg',
            time: '20m 30s',
            seller: 'Car Luxy',
        },
        {
            title: 'Ledger Bloom #22',
            collection: 'Block Garden',
            price: '4.75 ETH',
            img: 'assets/img/blockchain.webp',
            avatar: 'assets/img/Avatar Users2_12.svg',
            time: '30m 40s',
            seller: 'Lambo Mind',
        },
        {
            title: 'Gold Node #05',
            collection: 'Mint Reserve',
            price: '5.75 ETH',
            img: 'assets/img/coin.webp',
            avatar: 'assets/img/Avatar Users2_13.svg',
            time: '40m 50s',
            seller: 'Axios Legacy',
        },
    ]
}
