import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CardListComponent } from './card-list/card-list.component';
import { UiControlsComponent } from './ui-controls.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';

@NgModule({
  declarations: [UiControlsComponent, CardListComponent, CopyButtonComponent],
  imports: [CommonModule, DragDropModule],
  exports: [UiControlsComponent, CardListComponent, CopyButtonComponent],
})
export class UiControlsModule {}
