import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {}
