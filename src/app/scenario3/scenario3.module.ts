import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3.component';
import { ChTest1Component } from './ch-test1/ch-test1.component';

@NgModule({
  declarations: [
    Test3Component,
    ChTest1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Test3Component
  ]

})
export class Scenario3Module { }
