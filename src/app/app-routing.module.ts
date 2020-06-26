import { FavoritesComponent } from './favorites/favorites.component';
import { StoriesModule } from './stories/stories.module';
import { ComicsModule } from './comics/comics.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent ,
    children: [
      { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)},
      { path: 'comics', loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)},
      { path: 'stories', loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule)},
      { path: 'favorites', component: FavoritesComponent},
    ]},
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
