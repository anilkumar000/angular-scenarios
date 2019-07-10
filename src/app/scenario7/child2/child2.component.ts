import { Component, OnInit } from '@angular/core';
import {Test7Service } from '../test7.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 public  lastMessage='';

  constructor(private tService2: Test7Service) { }

  ngOnInit() {
    this.tService2.currentMessage().subscribe(message => this.lastMessage = message)
  }


}
