import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BigTextDirective } from './bigText.directive';
import { MiEvento } from './eventos';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BigTextDirective,
    MiEvento
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
