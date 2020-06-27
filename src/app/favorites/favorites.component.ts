import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../api';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  characters;
  comics;
  stories;

  constructor(public user: UserService, public api: ApiProvider) { }

  ngOnInit() {
    this.characters = this.user.characters;
    this.comics = this.user.comics;
    this.stories = this.user.stories;
  }

}
