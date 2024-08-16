import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UIColorDirective, UIAppearanceDirective, UIDisableDirective } from '@ui/directives';

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
			directive: UIColorDirective,
			inputs: ['color'],
		},
		{
			directive: UIAppearanceDirective,
			inputs: ['appearance'],
		},
		{
			directive: UIDisableDirective,
			inputs: ['disabled'],
		},
	],
})
export class ButtonComponent {}
