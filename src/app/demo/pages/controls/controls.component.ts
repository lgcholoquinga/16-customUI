import { Component } from '@angular/core';
import { BannerComponent, ButtonComponent, ChipComponent } from '@ui/components';

@Component({
	selector: 'lc-controls',
	standalone: true,
	imports: [ButtonComponent, ChipComponent, BannerComponent],
	templateUrl: './controls.component.html',
	styleUrl: './controls.component.scss',
})
export default class ControlsComponent {}
