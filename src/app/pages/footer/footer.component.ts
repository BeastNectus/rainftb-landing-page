import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    links = [
        {
            title: 'Marketplace',
            section: [
                { label: 'Explore NFTs' },
                { label: 'Live Auctions' },
                { label: 'Top Collections' },
                { label: 'Creator Rankings' },
            ],
        },
        {
            title: 'Company',
            section: [
                { label: 'About RAINFTB' },
                { label: 'Careers' },
                { label: 'Press' },
                { label: 'Contact' },
            ],
        },
        {
            title: 'Community',
            section: [
                { label: 'Creator Hub' },
                { label: 'Collector Guides' },
                { label: 'Events' },
                { label: 'Discord' },
            ],
        },
        {
            title: 'Legal',
            section: [
                { label: 'Terms of Service' },
                { label: 'Privacy Policy' },
                { label: 'Security' },
                { label: 'Royalties Policy' },
            ],
        },
    ]
}
