import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Inject, Injectable, HostListener} from '@angular/core';

// import {HttpClient, } from '';
import {Observable} from 'rxjs/internal/Observable';

import {environment} from '../environments/environment';
import {zip} from 'rxjs';
import {of as observableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {

  constructor(
    public http: HttpClient
  ) {

  }

  handleError(error) {
    switch (error.status) {
      case 0:
        this.handleOfflineError(error);
        break;
      case 500:
        this.handleInternalError(error);
        break;
    }

    throw error;

    // return Observable.empty();
  }

  handleInternalError(error) {
    this.presentErrorAlert('Ocurrio un error interno. Intente de nuevo.');
  }


  handleOfflineError(error ) {
    this.presentErrorAlert('Verifique conexión a internet!');
  }

  private presentErrorAlert(message: string) {
    alert(message);
  }


  public getData(searchParam: string, query?: string, page = 0) {
    query = encodeURI(query);
    query = query || null;
    const offset = page * 12;

    const url = new URL(`${environment.API.ENDPOINT}${searchParam}${environment.API.KEY}${query}&offset=${offset}`);
    console.log(url);
    return this.http.get(url.toString()).pipe(
      map((response) => {
        return {
          response
        };
      }));
  }

  public bottomReached(): boolean {
    // console.log('height:' + window.innerHeight, ' scrolly:' + window.scrollY + 'offheigh: ' + document.body.offsetHeight);
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 3;
  }

  public getId(str): string {
    const charId = str.substring(str.lastIndexOf('/') + 1, str.length + 1);
    return charId;
  }

}
