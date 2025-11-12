import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/Home/hero/hero.component';
import { FeatureComponent } from './Components/Home/feature/feature.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { FooterComponent } from './Core/Layout/footer/footer.component';
import { NavbarComponent } from './Core/Layout/navbar/navbar.component';
import { MainLayoutComponent } from './Core/Layout/main-layout/main-layout.component';
import { AboutusComponent } from './Components/Home/aboutus/aboutus.component';
import { EngineComponent } from './Components/Home/engine/engine.component';
import { RcmComponent } from './Components/Home/rcm/rcm.component';
import { GrowthComponent } from './Components/Home/growth/growth.component';
import { AutomationComponent } from './Components/Home/automation/automation.component';
import { WhyComponent } from './Components/Home/why/why.component';
import { SuccessesComponent } from './Components/Home/successes/successes.component';
import { VideoComponent } from './Components/Home/video/video.component';
import { TrustedPartnersComponent } from './Components/Home/trusted-partners/trusted-partners.component';
import { OurStandardsComponent } from './Components/Home/our-standards/our-standards.component';
import { PracticeComponent } from './Components/Home/practice/practice.component';
import { RevenuePageComponent } from './Pages/revenue-page/revenue-page.component';
import { RevenueheroComponent } from './Components/Revenue/revenuehero/revenuehero.component';
import { CompleteRevenueComponent } from './Components/Revenue/complete-revenue/complete-revenue.component';
import { AccelonBlueprintComponent } from './Components/Revenue/accelon-blueprint/accelon-blueprint.component';
import { InvestmentComponent } from './Components/Revenue/investment/investment.component';
import { BusinessGrowsComponent } from './Components/Revenue/business-grows/business-grows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HealthcareConsultingPageComponent } from './Pages/healthcare-consulting-page/healthcare-consulting-page.component';
import { MedicalContactCenterPageComponent } from './Pages/medical-contact-center-page/medical-contact-center-page.component';
import { AccelonCodePageComponent } from './Pages/accelon-code-page/accelon-code-page.component';
import { AccelonAuditPageComponent } from './Pages/accelon-audit-page/accelon-audit-page.component';
import { AccelonVoicePageComponent } from './Pages/accelon-voice-page/accelon-voice-page.component';
import { AccelonBeautyPageComponent } from './Pages/accelon-beauty-page/accelon-beauty-page.component';
import { AccelonNotePageComponent } from './Pages/accelon-note-page/accelon-note-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { CaseStudiesPageComponent } from './Pages/case-studies-page/case-studies-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { ExpertConsultingComponent } from './Components/HealthCareConsulting/expert-consulting/expert-consulting.component';
import { ComplianceComponent } from './Components/HealthCareConsulting/compliance/compliance.component';
import { ExcellenceComponent } from './Components/HealthCareConsulting/excellence/excellence.component';
import { ExpertiseComponent } from './Components/HealthCareConsulting/expertise/expertise.component';
import { UncertaintyComponent } from './Components/HealthCareConsulting/uncertainty/uncertainty.component';
import { CompetitorComponent } from './Components/medicalContactCenter/competitor/competitor.component';
import { PatientsComponent } from './Components/medicalContactCenter/patients/patients.component';
import { CallCenterComponent } from './Components/medicalContactCenter/call-center/call-center.component';
import { ComprehensiveComponent } from './Components/medicalContactCenter/comprehensive/comprehensive.component';
import { PracticeGrowthComponent } from './Components/medicalContactCenter/practice-growth/practice-growth.component';
import { AccelonDifferenceComponent } from './Components/medicalContactCenter/accelon-difference/accelon-difference.component';
import { FaqComponent } from './Components/medicalContactCenter/faq/faq.component';
import { PhysiciansComponent } from './Components/AccelonNote/physicians/physicians.component';
import { ClinicalDocumentationComponent } from './Components/AccelonNote/clinical-documentation/clinical-documentation.component';
import { ConversationComponent } from './Components/AccelonNote/conversation/conversation.component';
import { CalmComponent } from './Components/AccelonNote/calm/calm.component';
import { PoweredByAiComponent } from './Components/AccelonNote/powered-by-ai/powered-by-ai.component';
import { MedicalCodingComponent } from './Components/AccelonCode/medical-coding/medical-coding.component';
import { MomentComponent } from './Components/AccelonCode/moment/moment.component';
import { AccuracyShapedComponent } from './Components/AccelonCode/accuracy-shaped/accuracy-shaped.component';
import { CodingMetricsComponent } from './Components/AccelonCode/coding-metrics/coding-metrics.component';
import { PrecisionComponent } from './Components/AccelonCode/precision/precision.component';
import { TurnAuditingComponent } from './Components/AccelonAudit/turn-auditing/turn-auditing.component';
import { SilentRevenueComponent } from './Components/AccelonAudit/silent-revenue/silent-revenue.component';
import { TrustGradeComponent } from './Components/AccelonAudit/trust-grade/trust-grade.component';
import { HumanReviewersComponent } from './Components/AccelonAudit/human-reviewers/human-reviewers.component';
import { BuiltforHealthcareComponent } from './Components/AccelonAudit/builtfor-healthcare/builtfor-healthcare.component';
import { ClientsPreferComponent } from './Components/AccelonVoice/clients-prefer/clients-prefer.component';
import { CommunicationGapComponent } from './Components/AccelonVoice/communication-gap/communication-gap.component';
import { FluentInBusinessComponent } from './Components/AccelonVoice/fluent-in-business/fluent-in-business.component';
import { CrossIndustryComponent } from './Components/AccelonVoice/cross-industry/cross-industry.component';
import { AccelonVoiceFeelsComponent } from './Components/AccelonVoice/accelon-voice-feels/accelon-voice-feels.component';
import { LuxuryComponent } from './Components/AccelonBeauty/luxury/luxury.component';
import { EmptyAisleComponent } from './Components/AccelonBeauty/empty-aisle/empty-aisle.component';
import { TechnologiesComponent } from './Components/AccelonBeauty/technologies/technologies.component';
import { BeautyRetailComponent } from './Components/AccelonBeauty/beauty-retail/beauty-retail.component';
import { RevolutionComponent } from './Components/AccelonBeauty/revolution/revolution.component';
import { BeautyTechComponent } from './Components/AccelonBeauty/beauty-tech/beauty-tech.component';
import { HeartbeatComponent } from './Components/About/heartbeat/heartbeat.component';
import { OurStoryComponent } from './Components/About/our-story/our-story.component';
import { HealthcareArchitectsComponent } from './Components/About/healthcare-architects/healthcare-architects.component';
import { DeeplyLocalComponent } from './Components/About/deeply-local/deeply-local.component';
import { AccelonHealthVissionComponent } from './Components/About/accelon-health-vission/accelon-health-vission.component';
import { AccelonPromiseComponent } from './Components/About/accelon-promise/accelon-promise.component';
import { TheseProvidersComponent } from './Components/CaseStudy/these-providers/these-providers.component';
import { RiyadhPolyclinicComponent } from './Components/CaseStudy/riyadh-polyclinic/riyadh-polyclinic.component';
import { HospitalNetworkComponent } from './Components/CaseStudy/hospital-network/hospital-network.component';
import { HospitalGroupComponent } from './Components/CaseStudy/hospital-group/hospital-group.component';
import { StrongerFutureComponent } from './Components/Contact/stronger-future/stronger-future.component';
import { FormComponent } from './Components/Contact/form/form.component';
import { WhatToExpectComponent } from './Components/Contact/what-to-expect/what-to-expect.component';
import { PatientCommunicationComponent } from './Components/medicalContactCenter/patient-communication/patient-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeatureComponent,
    HomePageComponent,
    AboutPageComponent,
    FooterComponent,
    NavbarComponent,
    MainLayoutComponent,
    AboutusComponent,
    EngineComponent,
    RcmComponent,
    GrowthComponent,
    AutomationComponent,
    WhyComponent,
    SuccessesComponent,
    VideoComponent,
    TrustedPartnersComponent,
    OurStandardsComponent,
    PracticeComponent,
    RevenuePageComponent,
    RevenueheroComponent,
    CompleteRevenueComponent,
    AccelonBlueprintComponent,
    InvestmentComponent,
    BusinessGrowsComponent,
    HealthcareConsultingPageComponent,
    MedicalContactCenterPageComponent,
    AccelonCodePageComponent,
    AccelonAuditPageComponent,
    AccelonVoicePageComponent,
    AccelonBeautyPageComponent,
    AccelonNotePageComponent,
    ContactPageComponent,
    CaseStudiesPageComponent,
    NotFoundPageComponent,
    ExpertConsultingComponent,
    ComplianceComponent,
    ExcellenceComponent,
    ExpertiseComponent,
    UncertaintyComponent,
    CompetitorComponent,
    PatientsComponent,
    CallCenterComponent,
    ComprehensiveComponent,
    PracticeGrowthComponent,
    AccelonDifferenceComponent,
    FaqComponent,
    PhysiciansComponent,
    ClinicalDocumentationComponent,
    ConversationComponent,
    CalmComponent,
    PoweredByAiComponent,
    MedicalCodingComponent,
    MomentComponent,
    AccuracyShapedComponent,
    CodingMetricsComponent,
    PrecisionComponent,
    TurnAuditingComponent,
    SilentRevenueComponent,
    TrustGradeComponent,
    HumanReviewersComponent,
    BuiltforHealthcareComponent,
    ClientsPreferComponent,
    CommunicationGapComponent,
    FluentInBusinessComponent,
    CrossIndustryComponent,
    AccelonVoiceFeelsComponent,
    LuxuryComponent,
    EmptyAisleComponent,
    TechnologiesComponent,
    BeautyRetailComponent,
    RevolutionComponent,
    BeautyTechComponent,
    HeartbeatComponent,
    OurStoryComponent,
    HealthcareArchitectsComponent,
    DeeplyLocalComponent,
    AccelonHealthVissionComponent,
    AccelonPromiseComponent,
    TheseProvidersComponent,
    RiyadhPolyclinicComponent,
    HospitalNetworkComponent,
    HospitalGroupComponent,
    StrongerFutureComponent,
    FormComponent,
    WhatToExpectComponent,
    PatientCommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
