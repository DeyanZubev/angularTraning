import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-csschanges-color',
  templateUrl: './dynamic-csschanges-color.component.html',
  styleUrls: ['./dynamic-csschanges-color.component.scss']
})
export class DynamicCSSChangesColorComponent implements OnInit {
  constructor(
  ) { }

  isLoaded:Boolean = false;
  mainData: any = {};

  ngOnInit(): void {
    // console.log(this.ngColor);
    // console.log(this.mainData);

    // --timing: 400ms;
    // --rotation: 20deg;
    // document.documentElement.style.setProperty('--timing', '400ms');
    // document.documentElement.style.setProperty('--rotation', '20deg');

    // examples for Closures
    // const a = this.outerFunction('Hi');
    // const b = a('innerParam');
    // b('doubleInnerparam');
    //  this.clickHandler(12);
    // console.log(sizePx());



    this.isLoaded = true;
  }

  colorChange(event: String): void {
    console.log(event);
  }

  // Closures
  outerFunction(outerParam: any){
    return (innerParam: any) => {
      return (doubleInnerParam: any) => {
        console.log(outerParam);
        console.log(innerParam);
        console.log(doubleInnerParam);
      }
    }
  }

  clickHandler(size: Number) {
    return console.log(`${size}px`)
  }



  
}
