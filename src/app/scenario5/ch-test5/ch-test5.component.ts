import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ch-test5',
  templateUrl: './ch-test5.component.html',
  styleUrls: ['./ch-test5.component.css']
})
export class ChTest5Component implements OnInit {
  @Output() public parentEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  firEvent(value){
    this.parentEvent.emit(value);
  }
}
