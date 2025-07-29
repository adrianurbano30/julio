import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  name = signal<string>('IronMan');
  age = signal<number>(45);


  getHeroDescription(){

    return this.name() + ' is ' + this.age() + ' years old.';

  }

  changeHero(){

    this.name.set('Spidey');
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60)
  }

  resetHero(){
    this.name.set('IRONMAN');
    this.age.set(45);
  }

}
