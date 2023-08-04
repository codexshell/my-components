import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CardListComponent } from './card-list/card-list.component';
import { UiControlsComponent } from './ui-controls.component';

@NgModule({
  declarations: [UiControlsComponent, CardListComponent],
  imports: [CommonModule, DragDropModule],
  exports: [UiControlsComponent, CardListComponent],
})
export class UiControlsModule {}
