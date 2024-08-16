import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[lcUIAppearance]',
	standalone: true,
})
export class UIAppearanceDirective {
	@Input()
	appearance: 'solid' | 'stroked' = 'solid';

	@HostBinding('class')
	protected get computedHostClass() {
		return `df-${[this.appearance]}`;
	}
}
