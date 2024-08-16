import { Component } from '@angular/core';

import { HideAfterDirective } from './hide-after.directive';
import { BannerComponent, ButtonComponent, ChipComponent } from './ui/components';
import { CanAppearanceDirective, CanColorDirective, CanDisableDirective } from './ui/directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HideAfterDirective, 
    ButtonComponent, 
    ChipComponent, 
    BannerComponent,
    CanAppearanceDirective,
    CanColorDirective,
    CanDisableDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
