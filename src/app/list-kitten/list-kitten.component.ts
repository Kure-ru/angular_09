import { Component, HostListener, Input, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../kitten';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent implements OnInit {
  @Input() kittenInfo: 'hidden' | 'visible' = 'hidden';

  onMouseEnter(kitten: Kitten) {
    kitten.kittenInfo = 'visible';
  }

  onMouseLeave(kitten: Kitten) {
    kitten.kittenInfo = 'hidden';
  }

  kittens: Kitten[] = [];
  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens();
    console.log(this.kittens);
  }

  adoptKitten(kitten: Kitten) {
    this.kittenService.adoptKitten(kitten);
    this.kittens = this.kittenService.getKittens();
  }
}
