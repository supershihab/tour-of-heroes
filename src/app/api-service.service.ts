import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }

  getData () {
    return this._http.get('https://akabab.github.io/superhero-api/api/id/1.json')
  }
}
