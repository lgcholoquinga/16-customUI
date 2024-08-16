import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanAppearanceDirective, CanColorDirective, CanDisableDirective } from '../../directives';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance']
    },
    {
      directive: CanDisableDirective,
      inputs: ['disabled']
    }
  ]
})
export class ButtonComponent {}
