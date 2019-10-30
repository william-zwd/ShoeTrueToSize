import { Injectable } from '@angular/core';
import shoes from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})

export class ShoeService {

  constructor() { }

  // get all shoes data
  public getShoes()
  {
    return shoes;
  }
}
