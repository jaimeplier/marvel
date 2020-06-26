import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComicsComponent, ComicComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComicsRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class ComicsModule { }
