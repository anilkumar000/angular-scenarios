import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test5Component } from './test5.component';
import { ChTest5Component } from './ch-test5/ch-test5.component';
import { ChchTest5Component } from './ch-test5/chch-test5/chch-test5.component';

@NgModule({
  declarations: [
    Test5Component,
    ChTest5Component,
    ChchTest5Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Test5Component
  ]
})
export class Scenario5Module { }
