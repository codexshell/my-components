import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardListComponent } from './card-list/card-list.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { UiControlsComponent } from './ui-controls.component';

@NgModule({
  declarations: [UiControlsComponent, CardListComponent, CopyButtonComponent],
  imports: [CommonModule, DragDropModule, ClipboardModule],
  exports: [UiControlsComponent, CardListComponent, CopyButtonComponent],
})
export class UiControlsModule {}
