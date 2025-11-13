import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  activeSection = 'home';

    // Translation
  currentLang: string = 'en';
  flag: boolean = false;
  constructor() { }


  sections = [
    { url: '/home', label: 'Home' },
    {
      label: 'Outsourcing Services',
      dropdown: [
        { label: 'Revenue cycle management', url: 'revenue' },
        { label: 'Healthcare consulting', url: 'healthcare-consulting' },
        { label: 'Medical contact center', url: 'medical-contact-center' },
      ],
      showDropdown: false
    },
    {
      label: 'Technology Services',
      dropdown: [
        { label: 'Accelonnote', url: 'accelon-note' },
        { label: 'Acceloncode', url: 'accelon-code' },
        { label: 'AccelonAudit', url: 'accelon-audit' },
        { label: 'AccelonVoice', url: 'accelon-voice' },
        { label: 'AccelonBeauty', url: 'accelon-beauty' },
      ],
      showDropdown: false
    },
    { url: '/case-studies', label: 'Case Studies' },
    { url: '/aboutUs', label: 'About us' },
    { url: '/contact', label: 'Contact' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
  }

  // For mobile dropdowns
  toggleDropdown(section: any) {
    section.showDropdown = !section.showDropdown;
  }


  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  showScrollBackGround = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollBackGround = window.pageYOffset > 250;
  }

}
