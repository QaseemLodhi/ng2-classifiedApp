import { Component, Input } from '@angular/core';

import { Article, ArticleListConfig } from '../models';
import { ArticlesService, JwtService } from '../services';

@Component({
  selector: 'article-list',
  templateUrl: './post-list.component.html'
})
export class ArticleListComponent {
  constructor (
    private articlesService: ArticlesService,
    private jwtService: JwtService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  // results: Article[];
  results: any;
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];
    let token = this.jwtService.getToken();

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1))
    }

    this.articlesService.query(this.query,token)
    .subscribe(data => {
      this.loading = false;
      this.results = data;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      // this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)),(val,index)=>index+1);
    });
  }
}
