import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { SocialMediaComponent } from './socialmedia/socialmedia.component';
import { FinanceComponent } from './finance/finance.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    SocialMediaComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
