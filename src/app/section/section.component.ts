import { Component, OnInit } from '@angular/core';
import { RoutesTransition } from '../routestransition.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [
    './section.component.css',
    '../transitions.css'
  ]
})
export class SectionComponent implements OnInit {

  constructor(public rtAni: RoutesTransition) {
    rtAni.goFade("home", "section");
  }

  ngOnInit() {

  }

}
