import { Injectable } from '@angular/core';
import  { heroDatos } from '../service/datos';
import  { Hero } from '../interface/hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

listHero: Hero[] = heroDatos;

  constructor() { }

  get_hero(): Hero[] | any{
    return this.listHero;
  }

}
