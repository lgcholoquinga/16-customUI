import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[lcUIDisable]',
	standalone: true,
})
export class UIDisableDirective {
	@Input()
	@HostBinding('class.disabled')
	disabled = false;

	@HostBinding('attr.disabled')
	protected get nativeDisabled(): '' | null {
		return this.disabled ? '' : null;
	}

	@HostListener('click', ['$event'])
	@HostListener('dblclick', ['$event'])
	onClick(e: Event) {
		if (this.disabled) {
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}
}
