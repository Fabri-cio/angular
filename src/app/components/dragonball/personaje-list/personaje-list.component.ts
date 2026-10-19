import { Component, input } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-personaje-list',
  templateUrl: './personaje-list.component.html',
})
export class PersonajeListComponent {
  personajes = input.required<Personaje[]>();
  listName = input<string>();
}
