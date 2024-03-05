import { Component } from '@angular/core';
import { Kitten } from '../kitten';
import { FormsModule } from '@angular/forms';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  submitted = false;
  kitten: Kitten = new Kitten('', '', new Date());

  constructor(private kittenService: KittenService) {}

  newKitten() {
    this.kitten = new Kitten('', '', new Date());
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.kitten.picture) {
      this.kitten.picture = 'https://placekitten.com/200/300';
    }
    this.kittenService.addKitten(this.kitten);
    this.newKitten();
  }
}
