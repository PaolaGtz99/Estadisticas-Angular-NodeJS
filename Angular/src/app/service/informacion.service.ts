import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(public httClient: HttpClient) { }

  getJson(url: string){
    return this.httClient.get(url);
  }
}
