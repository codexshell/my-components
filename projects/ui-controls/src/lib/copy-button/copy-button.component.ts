import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css'],
})
export class CopyButtonComponent {
  /** Data you want to copy to the clipboard */
  @Input() data = '';
  /** Event indicates successful copy to the clipboard */
  @Output() copied = new EventEmitter<void>();

  onCopy() {
    this.copied.next();
  }
}
