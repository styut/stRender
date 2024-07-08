import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from "./component/jobs/jobs.component";
import { LoginComponent } from "./component/login/login.component";
import { MaainComponent } from "./component/maain/maain.component";
import {MakeResumeComponent  } from "./component/make-resume/make-resume.component";

const routes: Routes = [
  { path: '', component: MaainComponent, children:[{ path: 'jobs/:region/:area', component: JobsComponent}]},
  { path: 'login', component: LoginComponent },
  {path: 'Resume', component:MakeResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









