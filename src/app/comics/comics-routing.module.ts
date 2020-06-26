import { ComicsComponent } from './comics/comics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comic/comic.component';

const routes: Routes = [
    { path: '', component: ComicsComponent },
    { path: ':id', component: ComicComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComicsRoutingModule {}
