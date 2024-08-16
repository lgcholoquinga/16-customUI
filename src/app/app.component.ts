import { Component } from '@angular/core';
import { HideAfterDirective } from './hide-after.directive';
import { BannerComponent, ButtonComponent, ChipComponent } from './ui/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HideAfterDirective, ButtonComponent, ChipComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
