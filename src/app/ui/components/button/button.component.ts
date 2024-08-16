import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  standalone: true,
  imports: [],
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: 'button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends BaseComponent {}
