import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

type Testimonial = {
    name: string
    role: string
    rating: string
    description: string
    img: string
}

@Component({
    selector: 'app-testimonial',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
    infos: Testimonial[] = [
        {
            name: 'Sackie Jones Rio',
            role: 'Digital collector',
            rating: '4.8',
            description: 'RAINFTB makes live auctions feel calm and transparent. The collection pages are clear, fast, and easy to trust before I place a bid.',
            img: 'assets/img/Avatar Users2_48.svg',
        },
        {
            name: 'Jeremy Krondoz',
            role: 'Collection founder',
            rating: '4.9',
            description: 'The creator tools and audience quality are the reason we keep launching here. It feels built for serious drops without losing the energy.',
            img: 'assets/img/Avatar Users2_49.svg',
        },
        {
            name: 'Alexander Sarabia',
            role: 'Web3 curator',
            rating: '4.7',
            description: 'The marketplace highlights the right signals: creator history, active bids, and drop momentum. It saves time when scouting new work.',
            img: 'assets/img/Avatar Users2_30.svg',
        },
    ]
}
