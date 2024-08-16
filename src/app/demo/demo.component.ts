import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lc-demo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export default class DemoComponent {}
