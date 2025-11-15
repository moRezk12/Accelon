import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
