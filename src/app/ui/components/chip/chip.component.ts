import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UIColorDirective, UIAppearanceDirective, UIDisableDirective } from '@ui/directives';

@Component({
	selector: 'lc-chip',
	standalone: true,
	imports: [NgIf],
	template: `
		<span class="chip-text">
			<ng-content></ng-content>
		</span>
		<i (click)="onRemove()" *ngIf="removable" class="chip-remove-icon"></i>
	`,
	styleUrl: 'chip.component.scss',
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
export class ChipComponent {
	@Input()
	removable = false;

	@Output()
	removed = new EventEmitter<ChipComponent>();

	onRemove() {
		if (this.removable) {
			this.removed.emit(this);
		}
	}
}
