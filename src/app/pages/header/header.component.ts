import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    menuOpen = false

    navItems = [
        { label: 'Marketplace', href: '#marketplace' },
        { label: 'Auctions', href: '#auctions' },
        { label: 'Creators', href: '#creators' },
        { label: 'Community', href: '#community' },
    ]

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen
    }

    closeMenu(): void {
        this.menuOpen = false
    }
}
