import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { MarksheetComponent } from './marksheet/marksheet.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyGridComponent,
    MarksheetComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
