import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pid:number;
  pname:string;
  pdetails:string;
  price:number;
  plist:any;
  constructor(private router:Router) {
    this.plist=[{pid:1,pname:"colgate", pdetails:"Toothpaste", price:200.00},{pid:2,pname:"Dabar", pdetails:"HairOil", price:100.00},{pid:3,pname:"Ponds", pdetails:"ColdCreme", price:167.00}]
   }

  ngOnInit() {
  }
  onSelect(id){
    this.router.navigate(['/product',id.pid]);
  }
}
