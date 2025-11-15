import { Component , HostListener } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {


  ngOnInit() {
    AOS.init({
      once: false,
      easing: 'ease-in-out',
      offset: 0,
      startEvent: 'DOMContentLoaded',
    });
  }

  // استخدام event listener للـ scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    AOS.refresh();
  }

}
