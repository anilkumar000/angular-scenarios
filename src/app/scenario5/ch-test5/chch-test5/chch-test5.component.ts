import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chch-test5',
  templateUrl: './chch-test5.component.html',
  styleUrls: ['./chch-test5.component.css']
})
export class ChchTest5Component implements OnInit {
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireEvent(value){
  this.childEvent.emit(value);
}
}
