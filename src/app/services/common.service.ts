import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string){
    return localStorage.getItem(key);
  }
}
