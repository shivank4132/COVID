import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/home/countries/countries.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/home/dashboard-card/dashboard-card.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HelpLinkComponent } from './components/help-link/help-link.component';
import { NewsComponent } from './components/home/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    FaqsComponent,
    HelpLinkComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
