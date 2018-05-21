import { Component, OnInit, Input } from '@angular/core';
import { BookReader } from '../core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() reader : BookReader;

}
