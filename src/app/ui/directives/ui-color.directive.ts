import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[lcUIColor]',
	standalone: true,
})
export class UIColorDirective {
	@Input()
	color: 'primary' | 'secondary' = 'primary';

	@HostBinding('class')
	protected get computedHostClass() {
		return `df-${[this.color]}`;
	}
}
