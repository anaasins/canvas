import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BigTextDirective } from './bigText.directive'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BigTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
