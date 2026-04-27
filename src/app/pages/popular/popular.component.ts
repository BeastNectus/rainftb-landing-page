import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

type Creator = {
    name: string
    handle: string
    follower: string
    volume: string
    items: string
    img: string
    avatar: string
}

@Component({
    selector: 'app-popular',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popular.component.html',
    styleUrl: './popular.component.scss',
})
export class PopularComponent {
    infos: Creator[] = [
        {
            name: 'Rondo Alexander',
            handle: '@rondo',
            follower: '94K',
            volume: '1.9K ETH',
            items: '128',
            img: 'assets/img/nft.webp',
            avatar: 'assets/img/Avatar Users2_16.svg',
        },
        {
            name: 'Martias Queenbeer',
            handle: '@queenbeer',
            follower: '82K',
            volume: '1.4K ETH',
            items: '96',
            img: 'assets/img/bitcoin.webp',
            avatar: 'assets/img/Avatar Users2_17.svg',
        },
        {
            name: 'Tifanny Whites',
            handle: '@tifannyw',
            follower: '71K',
            volume: '980 ETH',
            items: '74',
            img: 'assets/img/blockchain.webp',
            avatar: 'assets/img/Avatar Users2_15.svg',
        },
        {
            name: 'Yu Zhong',
            handle: '@yuzhong',
            follower: '116K',
            volume: '2.3K ETH',
            items: '153',
            img: 'assets/img/coin.webp',
            avatar: 'assets/img/Avatar Users2_18.svg',
        },
    ]
}
