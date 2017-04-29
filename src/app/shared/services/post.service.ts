import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '../models';

@Injectable()
export class ArticlesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ArticleListConfig, token): Observable<{ articles: Article[], articlesCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    let params: URLSearchParams = new URLSearchParams();

    /*Object.keys(config.filters)
    .forEach((key) => {
      params.set(key, config.filters[key]);
    });*/

    /*return this.apiService
    .get('/articles' + ((config.type === 'feed') ? '/feed' : ''),params).map(data => data);*/
    return this.apiService
      .get('/api/posts' + ((config.type === 'userPosts') ? '/userPosts?token=' + token : '')).map
      (res =>
        res.data);
  }

  get(slug): Observable<Article> {
    debugger;
    return this.apiService.get('api/posts/' + slug)
      .map(res =>
        res.data);
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/api/posts/' + article.slug, article)
             .map(data => data.article);

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/api/posts', article)
        .map(res =>
          res.data);
    }
  }

/*  favorite(slug): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }*/


}
