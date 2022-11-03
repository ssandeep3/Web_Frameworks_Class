import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


var bclick:number = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  students = [{"name":"Amit", "rollno":"20CSU001"},{"name":"Sumit","rollno":"20CSU002"},{"name":"Nitin","rollno":"20CSU003"}];
  title = 'MyFirstPrj';
  inputBox:string="";
  count: number = 1000;
  imgPath:string = "assets/f2.jpg"
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
}
