import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links = [
    {
      "title": "About Us",
      "section": [
        { "label": "Our Company" },
        { "label": "Our Resources" },
        { "label": "Good Marketpace" },
        { "label": "High Auctions" }
      ]
    },
    {
      "title": "Our Marketplace",
      "section": [
        { "label": "NFT Service Markers" },
        { "label": "Trading Source Cards" },
        { "label": "Holly Rainbow Shot" },
        { "label": "NFT Shoe Product" }
      ]
    },
    {
      "title": "NFT Services",
      "section": [
        { "label": "NFT Upgrade" },
        { "label": "NFT Update" },
        { "label": "NFT Blowing" },
        { "label": "NFT Auction" }
      ]
    },
    {
      "title": "Helpful Links",
      "section": [
        { "label": "Payment Service" },
        { "label": "Terms Condition" },
        { "label": "Suggestions" },
        { "label": "Legal Services" }
      ]
    }
  ]
}
