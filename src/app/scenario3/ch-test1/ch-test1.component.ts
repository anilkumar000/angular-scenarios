import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ch-test1',
  templateUrl: './ch-test1.component.html',
  styleUrls: ['./ch-test1.component.css']
})
export class ChTest1Component implements OnInit {
@Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
