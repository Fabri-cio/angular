import { Component } from '@angular/core';

@Component({
  templateUrl: 'counter-page.component.html',
  styleUrls: ['counter-page.component.css']
})
export class CounterPageComponent {
  counter = 10;

  aumentarContador(valor: number) {
    this.counter += valor;
  }

  resetearContador() {
    this.counter = 0;
  }
}
