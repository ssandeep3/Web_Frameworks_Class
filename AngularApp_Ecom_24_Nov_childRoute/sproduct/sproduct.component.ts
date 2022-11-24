import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sproduct',
  templateUrl: './sproduct.component.html',
  styleUrls: ['./sproduct.component.css']
})
export class SproductComponent implements OnInit {

  pid:string;
  pname:string;
  pdetails:string;
  price:number;
  ptype:string;
  plist:any;

  constructor() {
    
   }

  ngOnInit() {
  }

}
