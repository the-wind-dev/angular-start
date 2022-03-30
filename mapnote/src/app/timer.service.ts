import { Injectable, Inject } from '@angular/core';
import { DOCUMENT, SET_INTERVAL } from './token';

@Injectable()
export class TimerService {
  constructor(
    @Inject(DOCUMENT) private document: Document, 
    @Inject(SET_INTERVAL) private setInterval: Function
    ) {}

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output'); //document
    let counter: number = 0;
    this.setInterval(() => { 
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}