import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ch2-test6',
  templateUrl: './ch2-test6.component.html',
  styleUrls: ['./ch2-test6.component.css']
})
export class Ch2Test6Component implements OnInit {
  @Input() public message;
  constructor() { }

  ngOnInit() {
  }

}
