import { Component, OnInit, Input, Output} from '@angular/core';
// import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-eg-comp',
  templateUrl: './eg-comp.component.html',
  styleUrls: ['./eg-comp.component.css']
})
export class EgCompComponent implements OnInit {
  @Input() cmsg:string;
  @Output() childVar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  sendMsg(msg:string){
    console.log("Msg Send...");
    this.childVar.emit(msg);
  }
  sVar:number;
  checkServiceVar(){
    this.sVar = new AppserviceService().getVar();
  }
}
