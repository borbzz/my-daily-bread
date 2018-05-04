import { Component } from '@angular/core';
import { DataService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor(dataService: DataService) {
    dataService.get()
      .subscribe(data => this.data = data);
  }

  
}
