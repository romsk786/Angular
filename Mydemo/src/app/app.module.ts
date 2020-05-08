import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLinksComponent } from './app-links/app-links.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { DLComponent } from './dl/dl.component';
import { SqlComponent } from './sql/sql.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLinksComponent,
    QuickLinksComponent,
    DLComponent,
    SqlComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
