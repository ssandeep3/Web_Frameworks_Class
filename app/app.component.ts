import { Component } from '@angular/core';

var bclick:number = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyFirstPrj';
  count: number = 1000;
  imgPath:string = "assets/f2.jpg"
  PrintName($event):void{
    bclick = (bclick%5)+1;
    console.log("Button Pressed");
    console.log(this.imgPath);
    this.imgPath = "assets/f"+bclick+".jpg";
    console.log("Event Performed:"+$event);
  }
}
