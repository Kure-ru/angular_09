import { Injectable } from '@angular/core';
import { Kitten } from './kitten';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  kittens: Kitten[] = [
    new Kitten(
      'Poupou',
      'European',
      new Date('2018-01-01'),
      'https://placekitten.com/200/300'
    ),
    new Kitten(
      'Minou',
      'Siamese',
      new Date('2019-01-01'),
      'https://placekitten.com/200/300'
    ),
  ];

  adopted: Kitten[] = [];

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten) {
    this.kittens = this.kittens.filter((k) => k !== kitten);
    this.adopted.push(kitten);
  }

  getAdoptedKittens(): Kitten[] {
    return this.adopted;
  }

  getKittens(): Kitten[] {
    return this.kittens;
  }
}
