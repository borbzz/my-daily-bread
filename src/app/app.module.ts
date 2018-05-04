import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { JsonPipe } from '@angular/common'

import { AppComponent } from './app.component';
import { DataService } from './service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    JsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
