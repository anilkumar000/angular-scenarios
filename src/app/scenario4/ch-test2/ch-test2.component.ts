import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-ch-test2',
  templateUrl: './ch-test2.component.html',
  styleUrls: ['./ch-test2.component.css']
})
export class ChTest2Component implements OnInit {
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireEvent(value){
  this.childEvent.emit(value);
}
}
