import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-hover-animation',
  templateUrl: './cool-hover-animation.component.html',
  styleUrls: ['./cool-hover-animation.component.scss']
})
export class CoolHoverAnimationComponent implements OnInit {

  ngOnInit():void {
    // --timing: 400ms;
    // --rotation: 20deg;
    document.documentElement.style.setProperty('--timing', '400ms');
    document.documentElement.style.setProperty('--rotation', '20deg');
  }

}
