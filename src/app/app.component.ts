import { Component } from '@angular/core';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { FormsModule } from '@angular/forms';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'Kitten Story';
}
