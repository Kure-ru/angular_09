import { Component } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../kitten';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  adoptedKittens: Kitten[] = [];
  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.adoptedKittens = this.kittenService.getAdoptedKittens();
  }
}
