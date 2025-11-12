import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {


  ngOnInit() {
      AOS.init({
    duration: 1000, // مدة الانيميشن بالمللي ثانية
    easing: 'ease-in-out', // نوع الانيميشن
    once: true, // يظهر الانيميشن مرة واحدة فقط
  });



  }

}
