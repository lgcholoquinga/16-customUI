import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent extends BaseComponent {
  @Input()
  removable = false;

  @Output()
  removed = new EventEmitter<ChipComponent>();

  onRemove() {
    if(this.removable){
      this.removed.emit(this);
    }
  }
}
