import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from '../header/header.component';
import {EjemploComponent} from './ejemplo/ejemplo.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, EjemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
