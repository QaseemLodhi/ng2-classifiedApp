import { Component, Input } from '@angular/core';

import { Article, User } from '../models';
import { UserService } from '../services';


@Component({
  selector: 'article-meta',
  templateUrl: './post-meta.component.html'
})
export class ArticleMetaComponent {
  @Input() article: Article;
  currentUser: User;

  constructor(private userService: UserService, ) {
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }
}
