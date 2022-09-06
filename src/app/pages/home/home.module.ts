import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DragDropModule } from 'primeng/dragdrop';
import { ToastModule } from 'primeng/toast';
import { HeaderModule } from 'src/app/components/header/header.module';
import { KanbanCardModule } from 'src/app/components/kanban-card/kanban-card.module';
import { ModalCardDetailModule } from 'src/app/components/modal-card-detail/modal-card-detail.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    ToastModule,
    HeaderModule,
    ModalCardDetailModule,
    ConfirmDialogModule,
    KanbanCardModule,
  ],
  exports: [HomeComponent],
  providers: [HomeService, MessageService, ConfirmationService],
})
export class HomeModule {}
