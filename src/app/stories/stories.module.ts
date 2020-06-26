import { StoriesComponent } from './stories/stories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoriesRoutingModule } from './stories-router.module';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [StoriesComponent, StoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
