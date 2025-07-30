import {  Component, output, signal } from '@angular/core';
import { chacracter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-app',
  imports: [],
  templateUrl: './character-app.component.html',

})
export class CharacterAppComponent {

   newCharacter = output<chacracter>();
    name = signal('');
    power = signal(0);


    addcharacter(){

        if (!this.name() || !this.power || this.power()<=0) {
          return;
        }
        const newcharacter:chacracter = {
          id:Math.floor(Math.random() * 1000),
          name:this.name(),
          power:this.power()
        }
        //this.characters().push(newcharacter);
        this.newCharacter.emit(newcharacter)

        this.name.set('');
        this.power.set(0);
      }
}
