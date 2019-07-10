import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ch1-test6',
  templateUrl: './ch1-test6.component.html',
  styleUrls: ['./ch1-test6.component.css']
})
export class Ch1Test6Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.childEvent.emit(value);
  }
}
