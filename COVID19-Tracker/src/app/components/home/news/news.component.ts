import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../../models/global-data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() news: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
