import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanColorDirective, CanAppearanceDirective } from '../../directives';

@Component({
  selector: 'lc-banner',
  standalone: true,
  template: `
    <h5>Notification:</h5>
    <div class="banner-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance']
    }
  ]
})
export class BannerComponent {}
