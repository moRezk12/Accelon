import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Core/Layout/main-layout/main-layout.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RevenuePageComponent } from './Pages/revenue-page/revenue-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { AccelonAuditPageComponent } from './Pages/accelon-audit-page/accelon-audit-page.component';
import { AccelonBeautyPageComponent } from './Pages/accelon-beauty-page/accelon-beauty-page.component';
import { AccelonCodePageComponent } from './Pages/accelon-code-page/accelon-code-page.component';
import { AccelonNotePageComponent } from './Pages/accelon-note-page/accelon-note-page.component';
import { AccelonVoicePageComponent } from './Pages/accelon-voice-page/accelon-voice-page.component';
import { HealthcareConsultingPageComponent } from './Pages/healthcare-consulting-page/healthcare-consulting-page.component';
import { MedicalContactCenterPageComponent } from './Pages/medical-contact-center-page/medical-contact-center-page.component';
import { CaseStudiesPageComponent } from './Pages/case-studies-page/case-studies-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

const routes: Routes = [

  {
    path : '', redirectTo : 'home', pathMatch : 'full'
  },

  {
    path : '' ,
    component : MainLayoutComponent,
    children : [
      {
        path : '', redirectTo : 'home', pathMatch : 'full'
      },
      {
        path : 'home',
        component : HomePageComponent,
        title : 'Home'
      },
      {
        path : 'revenue',
        component : RevenuePageComponent,
        title : 'Revenue'
      },
      {
        path : 'healthcare-consulting',
        component : HealthcareConsultingPageComponent,
        title : 'Healthcare Consulting'
      },
      {
        path : 'medical-contact-center',
        component : MedicalContactCenterPageComponent,
        title : 'Medical Contact Center'
      },
      {
        path : 'aboutUs',
        component : AboutPageComponent,
        title : 'About Us'
      },
      {
        path : 'accelon-audit',
        component : AccelonAuditPageComponent,
        title : 'Accelon Audit'
      },
      {
        path : 'accelon-beauty',
        component : AccelonBeautyPageComponent,
        title : 'Accelon Beauty'
      },
      {
        path : 'accelon-code',
        component : AccelonCodePageComponent,
        title : 'Accelon Code'
      },
      {
        path : 'accelon-note',
        component : AccelonNotePageComponent,
        title : 'Accelon Note'
      },
      {
        path : 'accelon-voice',
        component : AccelonVoicePageComponent,
        title : 'Accelon Voice'
      },
      {
        path : 'case-studies',
        component : CaseStudiesPageComponent,
        title : 'Case Studies'
      },
      {
        path : 'contact',
        component : ContactPageComponent,
        title : 'Contact'
      },
      {
        path : '**',
        component : NotFoundPageComponent,
        title : 'Not Found'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
