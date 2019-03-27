import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SqrtPipe } from './app.sqrt';
import { SquarePipe } from './app.square';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    SqrtPipe,
    SquarePipe,
    MaskPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
