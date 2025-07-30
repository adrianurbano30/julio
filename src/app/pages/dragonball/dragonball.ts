import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { chacracter } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})
export class Dragonball {

  name = signal('gohan');
  power = signal(0);

  characters = signal<chacracter[]>([
    { id:1, name: 'Goku', power: 9000 },
    { id:2, name: 'Vegeta', power: 8500 },
    { id:3,name: 'Gohan', power: 8000 },
    { id:4, name: 'Piccolo', power: 7000 },
    { id:5, name: 'Frieza', power: 10000 },
    { id:6, name: 'Cell', power: 9500 },
    { id:7, name: 'Majin Buu', power: 12000 }
  ]);

  addcharacter(){

    if (!this.name() || !this.power || this.power()<=0) {
      return;
    }
    const newcharacter:chacracter = {
      id:this.characters().length + 1,
      name:this.name(),
      power:this.power()
    }
    //this.characters().push(newcharacter);
    this.characters.update((lista)=>[...lista,newcharacter] )

    this.name.set('');
    this.power.set(0);
  }

}
