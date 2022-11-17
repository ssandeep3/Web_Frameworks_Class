import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppserviceService } from './appservice.service';

var bclick:number = 0;
serviceClass:AppserviceService;
var isBold:boolean = true;
var isItalic:boolean=true;
var fontSize:number = 20;
var applyImgBdr:boolean = true;
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serviceClass:AppserviceService;
  msg:string = "A Message from Parent...";
  students = [{"name":"Amit", "rollno":"20CSU001"},{"name":"Sumit","rollno":"20CSU002"},{"name":"Nitin","rollno":"20CSU003"}];
  title = 'MyFirstPrj';
  inputBox:string="";
  count: number = 1000;
  imgPath:string = "assets/f2.jpg"
  imgSize:String = "one";
  PrintName($event):void{
    bclick = (bclick%5)+1;
    console.log("Button Pressed");
    console.log(this.imgPath);
    this.imgPath = "assets/f"+bclick+".jpg";
    console.log("Event Performed:"+$event);
  }
  inputClick():void{
    this.inputBox = this.inputBox.toUpperCase();
  }
  
  imageSizeChange(){
    console.log(this.imgSize);
    if(this.imgSize=="one")
      this.imgSize = "two";
    else{
      this.imgSize="one";
    }
  }
  cl:boolean=true;
  AddRemoveStyle(){
    // let stl = {'font-weight':isBold ? 'bold' : 'normal', 
    // 'font-style':isItalic ? 'italic':'normal',
    // 'font-size.px' : fontSize};
    // let stl = {'font-weight':'bold','font-style':'italic','font-size.px' : 25};
    // return stl;
    this.cl = this.cl?true:false;
  }
  AddRemoveClass(){
    if(applyImgBdr==true){
      applyImgBdr = false;
    }
    else{
      applyImgBdr = true;
    }
    return {'imgBdr':applyImgBdr,'btn':true, 'btn-primary':true};
  }
  childMessage:string;
  receMsg(msg:string){
    this.childMessage = msg;
    console.log(msg);
  }
  ngOnChanges(){
    console.log("1. ngOnChanges()");
  }
  ngOnInit(){
    console.log("2. ngOnInit()");
  }
  ngDoCheck(){
    console.log("3. ngDoCheck()");
  }
  ngAfterContentInit(){
    console.log("4. ngAfterContentInit()");
  }
  ngAfterContentChecked(){
    console.log("5. ngAfterContentChecked()");
  }
  ngAfterViewInit(){
    console.log("6. ngAfterViewInit()");
  }
  ngAfterViewChecked(){
    console.log("7. ngAfterViewChecked()");
  }
  ngOnDestroy(){
    console.log("8. ngOnDestroy()");
  }
  serviceVar:number=100;
  getServiceVar(){
    console.log("Print service Variable");
    this.serviceClass = new AppserviceService();
    this.serviceClass.setVar();
    this.serviceVar =  this.serviceClass.getVar();  //  this.serviceClass.getVar();
    console.log(this.serviceClass);
    
  }
}
