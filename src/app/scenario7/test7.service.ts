import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Test7Service {
  private test7Source = new Subject<any>();
  currentMessage (){
    return this.test7Source.asObservable();
  }
  constructor() { }

  changeMessage(serviceMessage) {
    this.test7Source.next(serviceMessage);
  }
}