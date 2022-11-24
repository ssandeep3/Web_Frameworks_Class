import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {
plist:any;
  constructor() {
    this.plist=[{pid:"S001",pname:"Chess Board", pdetails:"International standard Chess board with pieces", price:1550.00, ptype:"indoor"},{pid:"S002",pname:"Caram", pdetails:"Caram Board Set and kit", price:2420.00,ptype:"indoor"},{pid:"S003",pname:"Table-Tannis", pdetails:"Table tannis", price:5000.00,ptype:"indoor"}]
   }

  ngOnInit() {
  }

}
