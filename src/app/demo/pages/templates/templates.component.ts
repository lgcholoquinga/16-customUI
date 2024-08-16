import { Component } from '@angular/core';
import { HideAfterDirective } from './hide-after.directive';

@Component({
	selector: 'lc-structural-directive',
	standalone: true,
	imports: [HideAfterDirective],
	templateUrl: './templates.component.html',
	styleUrl: './templates.component.scss',
})
export default class StructuralDirectiveComponent {}
