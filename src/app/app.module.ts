// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './component/login/login.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaainComponent } from './component/maain/maain.component';
// import { JobsComponent } from './component/jobs/jobs.component';
// import { SingleJobComponent } from './component/single-job/single-job.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     MaainComponent,
//     JobsComponent,
//     SingleJobComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaainComponent } from './component/maain/maain.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { SingleJobComponent } from './component/single-job/single-job.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './component/filter/filter.component';
import { MakeResumeComponent } from './component/make-resume/make-resume.component';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { ResumeModalComponent } from './component/resume-modal/resume-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListJobSentCvComponent } from './component/list-job-sent-cv/list-job-sent-cv.component';
import { ButtonStyleDirective } from './directive/button-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaainComponent,
    JobsComponent,
    SingleJobComponent,
    FilterComponent,
    MakeResumeComponent,
    PopUpComponent,
    ResumeModalComponent,
    ListJobSentCvComponent,
    ButtonStyleDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
