import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './post.component';
import { ArticleCommentComponent } from './post-comment.component';
import { ArticleResolver } from './post-resolver.service';
// import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'post/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  }
]);

@NgModule({
  imports: [
    articleRouting,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
    // MarkdownPipe
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
