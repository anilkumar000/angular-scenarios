import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test6Component } from './test6.component';
import { Ch1Test6Component } from './ch1-test6/ch1-test6.component';
import { Ch2Test6Component } from './ch2-test6/ch2-test6.component';

@NgModule({
  declarations: [
    Test6Component,
    Ch1Test6Component,
    Ch2Test6Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Test6Component
  ]
})
export class Scenario6Module { }
