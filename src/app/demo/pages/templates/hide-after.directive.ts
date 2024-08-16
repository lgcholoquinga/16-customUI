import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext {
	public get $implicit() {
		return this.lcHideAfter;
	}
	public lcHideAfter = 0;
	public counter = 0;
}

@Directive({
	selector: '[lcHideAfter]',
	standalone: true,
})
export class HideAfterDirective implements OnInit {
	@Input('lcHideAfter')
	set delay(value: number) {
		this._delay = value ?? 0;
		this.context.lcHideAfter = this.context.counter = this._delay / 1000;
	}
	_delay = 0;

	@Input() lcHideAfterThen: TemplateRef<HideAfterContext> | null = null;

	private context = new HideAfterContext();

	constructor(
		private viewContainerRef: ViewContainerRef,
		private template: TemplateRef<HideAfterContext>,
	) {}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(this.template, this.context);

		const intervalId = setInterval(() => {
			this.context.counter--;
		}, 1000);

		setTimeout(() => {
			this.viewContainerRef.clear();

			if (this.lcHideAfterThen) {
				this.viewContainerRef.createEmbeddedView(this.lcHideAfterThen, this.context);
			}

			clearInterval(intervalId);
		}, this._delay);
	}
}
