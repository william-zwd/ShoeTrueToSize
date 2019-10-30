import { Injectable } from '@angular/core';
import shoes from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  constructor() { }

  public getShoes()
  {
    return shoes;
  }
}
