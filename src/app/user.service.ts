import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  characters = [];
  comics = [];
  stories = [];

  constructor() { }

  // check(obj, type) {
  //   if (this[type].some( (el) => {
  //     if (el) {
  //       return el.id === obj.id;
  //     }
  //   } )) {
  //     return true;
  //   }
  //   return false;
  // }

  save(type, obj) {
    this[type].push(obj);
    alert('Added item to favorites!');
  }
}
