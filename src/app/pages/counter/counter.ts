import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterLink],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  aux:number=0;
  aux_signal= signal(0);

  increment() {
    if (this.aux<10 || this.aux_signal() < 10) {
      this.aux++;
      this.aux_signal.update((v_actual)=>v_actual+1);
    }

  }
  decrement() {
    if(this.aux>0 || this.aux_signal() > 0) {
      this.aux--;
      this.aux_signal.update((v_actual) => v_actual - 1);
    }

  }
  reset() {
    if (this.aux>0 || this.aux_signal() > 0) {
       this.aux = 0;
       this.aux_signal.set(0);
    }else{
      alert("there is nothing to reset");
    }



  }

}
