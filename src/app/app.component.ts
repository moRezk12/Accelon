import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showScrollButton = false;
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 250;
  }




}
