import { Component, OnInit } from '@angular/core';
// import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-dynamic-csschanges-color',
  templateUrl: './dynamic-csschanges-color.component.html',
  styleUrls: ['./dynamic-csschanges-color.component.scss']
})
export class DynamicCSSChangesColorComponent implements OnInit {
  constructor(
    // private ngColor: ColorPickerModule
  ){}

  mainData: any = {};

  ngOnInit():void {
    // console.log(this.ngColor);
    console.log(this.mainData);
    // --timing: 400ms;
    // --rotation: 20deg;
    // document.documentElement.style.setProperty('--timing', '400ms');
    // document.documentElement.style.setProperty('--rotation', '20deg');

  }

  colorChange(event:any):void {
console.log(event);
  }
}
