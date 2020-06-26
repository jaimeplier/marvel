import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { Routes, RouterModule } from '@angular/router';
import { CharactersRoutingModule } from './characters-routing.module';
import { HeaderComponent } from '../header/header.component';
import { CharacterComponent } from './character/character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CharactersRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: []
})
export class CharactersModule { }
