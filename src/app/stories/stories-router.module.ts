import { StoryComponent } from './story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: StoriesComponent },
    { path: ':id', component: StoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StoriesRoutingModule {}
