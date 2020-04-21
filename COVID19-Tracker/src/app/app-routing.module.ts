import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HelpLinkComponent } from './components/help-link/help-link.component';


const routes: Routes = [
  {
    path : '',redirectTo : '/home', pathMatch : 'full' 
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'faqs', component : FaqsComponent
  },
  {
    path : 'help-link', component :HelpLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
