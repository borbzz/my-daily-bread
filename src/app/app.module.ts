import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { JsonPipe } from '@angular/common'

import { AppComponent } from './app.component';
import { DataService } from './service'
import { environment } from '../environments/environment';
import { ChapterComponent } from './chapter/chapter.component';
import { ContentsComponent } from './contents/contents.component';


@NgModule({
  declarations: [
    AppComponent,
    ChapterComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataService,
    JsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
