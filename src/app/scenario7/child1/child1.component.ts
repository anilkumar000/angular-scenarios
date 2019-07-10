import { Component, OnInit } from '@angular/core';
import { Test7Service } from '../test7.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor(private tService1: Test7Service) { }

  ngOnInit() {
    }
  fireEvent(value){
  this.tService1.changeMessage(value);
}
}
