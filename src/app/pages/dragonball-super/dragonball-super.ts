import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { chacracter } from '../../interfaces/character.interface';
import { CharacterAppComponent } from "../../components/dragonball/character-app/character-app.component";



@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAppComponent],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

    name = signal('');
    power = signal(0);

    characters = signal<chacracter[]>([
      { id:1, name: 'Goku', power: 9000 },
      { id:1, name: 'Vegeta', power: 8000 },
    ]);

    addCaracter(character:chacracter){
      this.characters.update((list)=>[...list,character]);
    }

}
