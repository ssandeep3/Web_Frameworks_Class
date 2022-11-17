import { Injectable } from '@angular/core';
var shareVar:number = 0;
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  constructor() {
   }
  serviceVar:number;
  setVar(){
    this.serviceVar = 10;
    shareVar += 10;
  }
  getVar(){
    return shareVar;
  }
}
