import { Component } from '@angular/core';
import { HideAfterDirective } from './hide-after.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HideAfterDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
