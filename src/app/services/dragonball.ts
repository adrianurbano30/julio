import { effect, Injectable, signal } from '@angular/core';
import { chacracter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  savetoLocalStorage = effect(()=>{

    console.log('character count ',this.characters().length);

    localStorage.setItem('characters', JSON.stringify(this.characters()))

  } );

   characters = signal<chacracter[]>([
      { id:1, name: 'Goku', power: 9000 },
      { id:1, name: 'Vegeta', power: 8000 },
    ]);

    addCaracter(character:chacracter){
      this.characters.update((list)=>[...list,character]);
    }

}
