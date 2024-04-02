import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UniversityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
