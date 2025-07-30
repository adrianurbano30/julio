import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { chacracter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  imports: [NgClass],
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {

  characters = input.required<chacracter[]>();
  listName = input.required<string>();

 }
