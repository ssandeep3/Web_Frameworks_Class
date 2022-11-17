import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  obj:AppserviceService;
  @Input() childMsg:string;
  constructor() { }

  ngOnInit() {
  }
  n:number;
  getShareVar(){
    this.obj = new AppserviceService();
    this.n = this.obj.getVar();
  }

}
