import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';

@NgModule({
  declarations: [
    AppComponent,
    CricketComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
