import { Component, signal } from '@angular/core';

interface Personaje {
  id: number;
  nombre: string;
  poder: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  nombre = signal('Gohan');
  poder = signal(500);

  personajes = signal<Personaje[]>([
    {
      id: 1,
      nombre: 'Goku',
      poder: 9001,
    },
    {
      id: 2,
      nombre: 'Vegeta',
      poder: 8000,
    },

    {
      id: 3,
      nombre: 'Piccolo',
      poder: 7000,
    },
    {
      id: 4,
      nombre: 'Yamcha',
      poder: 500,
    },
  ]);

  addPersonaje() {
    if (!this.nombre() || !this.poder() || this.poder() <= 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: this.personajes().length + 1,
      nombre: this.nombre(),
      poder: this.poder(),
    };

    this.personajes.update((list) => [...list, nuevoPersonaje]);
    
    this.resetearCampos();
  }

  resetearCampos() {
    this.nombre.set('');
    this.poder.set(0);
  }
}
