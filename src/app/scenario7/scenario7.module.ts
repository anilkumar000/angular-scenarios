import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test7Component } from './test7.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Test7Service } from './test7.service';

@NgModule({
  declarations: [
    Test7Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule
  ],
  providers : [Test7Service],
  exports : [
    Test7Component
  ]
})
export class Scenario7Module { }
