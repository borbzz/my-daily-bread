import { Component } from '@angular/core';
import { DataService } from './service';
import { BookReader } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';

  data: BookReader;

  current = {
    book: 0,
    chapter: 0
  }

  constructor(dataService: DataService) {
    dataService.get()
      .subscribe(data => this.data = new BookReader(data));
  }

  prev() {
    this.data.nextChapter();
  }

  next() {
    this.data.nextChapter();
  }

  
}
