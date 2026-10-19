import { Component, output, signal } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  nombre = signal('');
  poder = signal(0);

  nuevoPersonaje = output<Personaje>();

  addPersonaje() {
    if (!this.nombre() || !this.poder() || this.poder() <= 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre(),
      poder: this.poder(),
    };

    this.nuevoPersonaje.emit(nuevoPersonaje);
    this.resetearCampos();
  }

  resetearCampos() {
    this.nombre.set('');
    this.poder.set(0);
  }
}
