import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CardModule } from 'primeng/card';
import { KanbanCardComponent } from './kanban-card.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [KanbanCardComponent],
  imports: [CommonModule, MarkdownModule.forRoot(), CardModule, ButtonModule],
  exports: [KanbanCardComponent],
})
export class KanbanCardModule {}
