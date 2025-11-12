import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

    faqs = [
    {
      question: 'Arabic and English?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, eum.',
      open: false
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime without any hidden fees.',
      open: false
    },
    {
      question: 'Do you offer support?',
      answer: 'Absolutely! Our team is available 24/7 to assist you.',
      open: false
    },
    {
      question: 'Do you offer support?',
      answer: 'Absolutely! Our team is available 24/7 to assist you.',
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }

}
