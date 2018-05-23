import { Component } from '@angular/core';
import { DataService } from './service';
import { BookReader, ReaderState } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';

  book: BookReader;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;

    dataService.get()
      .subscribe(data => this.book = new BookReader(data, new ReaderState(dataService.state)));
  }
}
