import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {
  plist:any;
  constructor() {
    this.plist=[{pid:"S001",pname:"Hockey Stick", pdetails:"Standard size; best quality", price:850.00, ptype:"outdoor"},{pid:"S002",pname:"Football", pdetails:"Standard size football", price:1300.00,ptype:"outdoor"},{pid:"S003",pname:"Bat", pdetails:"Cricket bat - standard size", price:1873.00,ptype:"outdoor"}]
   }

  ngOnInit() {
  }

}
