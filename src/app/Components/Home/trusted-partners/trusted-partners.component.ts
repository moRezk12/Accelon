import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trusted-partners',
  templateUrl: './trusted-partners.component.html',
  styleUrls: ['./trusted-partners.component.css']
})
export class TrustedPartnersComponent {

partners = [
    { src: '../../../../assets/Images/landingPage/partenrOne.png', alt: 'Partner 1' },
    { src: '../../../../assets/Images/landingPage/partenerTwo.png', alt: 'Partner 2' },
    { src: '../../../../assets/Images/landingPage/partenrThree.png', alt: 'Partner 3' },
    { src: '../../../../assets/Images/landingPage/partenrfour.png', alt: 'Partner 4' },
    { src: '../../../../assets/Images/landingPage/partentfive.png', alt: 'Partner 5' },
    { src: '../../../../assets/Images/landingPage/fit.png', alt: 'Partner 6' },
    // { src: '../../../../assets/Images/landingPage/healthy.png', alt: 'Partner 7' },
    { src: '../../../../assets/Images/landingPage/help.png', alt: 'Partner 8' },
    { src: '../../../../assets/Images/landingPage/helpTwo.jpg', alt: 'Partner 9' },
    { src: '../../../../assets/Images/landingPage/helpthree.png', alt: 'Partner 10' },
    { src: '../../../../assets/Images/landingPage/helpfour.png', alt: 'Partner 11' },
    { src: '../../../../assets/Images/landingPage/helpfive.png', alt: 'Partner 12' },
    { src: '../../../../assets/Images/landingPage/helpsix.png', alt: 'Partner 13' },
    { src: '../../../../assets/Images/landingPage/helpseven.png', alt: 'Partner 14' },
    { src: '../../../../assets/Images/landingPage/helpeignt.jpg', alt: 'Partner 15' },
    { src: '../../../../assets/Images/landingPage/helpten.jpg', alt: 'Partner 16' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    }
  }
}
