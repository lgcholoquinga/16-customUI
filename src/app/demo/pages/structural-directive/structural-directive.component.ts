import { Component } from '@angular/core';
import { HideAfterDirective } from '../../../hide-after.directive';

@Component({
  selector: 'lc-structural-directive',
  standalone: true,
  imports: [HideAfterDirective],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export default class StructuralDirectiveComponent {}
