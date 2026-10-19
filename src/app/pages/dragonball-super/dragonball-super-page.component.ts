import { Component, signal } from '@angular/core';
import { PersonajeListComponent } from '../../components/dragonball/personaje-list/personaje-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [PersonajeListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  personajes = signal<Personaje[]>([
    {
      id: 1,
      nombre: 'Goku',
      poder: 9001,
    },
  ]);

  addPersonaje(personaje: Personaje) {
    this.personajes.update((list) => [...list, personaje]);
  }
}
