import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service';
import { BookReader, ReaderState } from '../core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() book: BookReader;
  @Input() dataService: DataService;

  showToc: boolean = false;

  prev() {
    this.book.prevChapter();
    this.dataService.state = this.book.state;
  }

  next() {
    this.book.nextChapter();
    this.dataService.state = this.book.state;
  }

  toc() {
    this.showToc = !this.showToc;
  }
}
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

export class ReaderStateResolver implements Resolve<any> {

  constructor(private dataService : DataService) {}

  resolve(route : ActivatedRouteSnapshot) : any {
    return new ReaderState({
      bookIndex: route.paramMap.get('bookId'),
      partIndex: route.paramMap.get('partId'),
      chapterIndex: route.paramMap.get('chapterId')
    });
  }

}
