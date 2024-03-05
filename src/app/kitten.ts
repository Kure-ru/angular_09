export class Kitten {
  constructor(
    public name: string,
    public race: string,
    public birthdate: Date,
    public picture?: string,
    public kittenInfo: 'hidden' | 'visible' = 'hidden'
  ) {}
}
