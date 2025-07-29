import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  aux:number=0;

  increment() {
    this.aux++;
  }
  decrement() {
    this.aux--;
  }
  reset() {
    this.aux = 0;
  }

}
