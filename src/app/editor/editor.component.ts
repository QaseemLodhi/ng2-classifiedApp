import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticlesService } from '../shared';

@Component({
  selector: 'editor-page',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  article: Article = new Article();
  postForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.postForm = this.fb.group({
      title: '',
      description: '',
      body: '',
    });
    // Optional: subscribe to value changes on the form
    // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    this.route.data.subscribe(
      (data: {article: Article}) => {
        if (data.article) {
          this.article = data.article;
          this.postForm.patchValue(data.article);
        }
      }
    );
  }

 /* addTag() {
    // retrieve tag control
    let tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }*/

  /*removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter((tag) => tag !== tagName);
  }*/

  submitForm() {
    debugger;
    this.isSubmitting = true;

    // update the model
    this.updateArticle(this.postForm.value);

    // post the changes
    this.articlesService
    .save(this.article)
    .subscribe(
      post =>
      console.log(post),
        // this.router.navigateByUrl('/article/' + article),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateArticle(values: Object) {
    (<any>Object).assign(this.article, values);
  }
}
