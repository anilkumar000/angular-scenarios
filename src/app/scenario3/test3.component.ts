import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  public name="";

  constructor() { }

  ngOnInit() {
  }
  log(value){
    console.log(value);
    this.name=value;
  }

}
