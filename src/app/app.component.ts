import { Component } from '@angular/core';
import { RoutesTransition } from './routestransition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './transitions.css'
  ],
})
export class AppComponent {

  constructor(public rtAni: RoutesTransition){

  }
}
