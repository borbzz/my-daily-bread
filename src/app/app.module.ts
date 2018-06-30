import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common'

import { AppComponent } from './app.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ContentsComponent } from './contents/contents.component';
import { ReaderComponent } from './reader/reader.component'

import { DataService } from './service'
import { environment } from '../environments/environment';
import routes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ChapterComponent,
    ContentsComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(routes, {enableTracing: !environment.production}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataService,
    JsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
