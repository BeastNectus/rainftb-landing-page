import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
})
export class BannerComponent {
    stats = [
        { value: '$48M+', label: 'market volume' },
        { value: '12K+', label: 'verified creators' },
        { value: '326', label: 'live auctions' },
    ]

    featuredAuction = {
        title: 'Prism Genesis #08',
        creator: 'Rondo Alexander',
        price: '3.84 ETH',
        time: '08h 24m',
        image: 'assets/img/nft.webp',
        avatar: 'assets/img/Avatar Users2_16.svg',
    }

    trustSignals = ['Verified drops', 'Escrow-ready bids', 'Creator royalties']
}
