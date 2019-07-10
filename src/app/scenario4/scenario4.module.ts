import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test4Component } from './test4.component';
import { ChTest2Component } from './ch-test2/ch-test2.component';

@NgModule({
  declarations: [
    Test4Component,
    ChTest2Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Test4Component
  ]
})
export class Scenario4Module { }
