import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticleRoutingModule, RouterModule],
})
export class ArticleModule {}
