import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink,UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  name = signal<string>('IronMan');
  age = signal<number>(45);

  herodescription = computed(()=>{
    const description = this.name()+' is '+this.age()+'years old';
    return description;
  });

  capitalizedName = computed(()=>{this.name().toUpperCase()});


  // getHeroDescription(){

  //   return this.name() + ' is ' + this.age() + ' years old.';

  // }

  changeHero(){

    this.name.set('Spidey');
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60)
  }

  resetHero(){
    this.name.set('IronMan');
    this.age.set(45);
  }

}
