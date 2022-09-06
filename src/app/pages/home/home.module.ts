import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { MarkdownModule } from 'ngx-markdown';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DragDropModule } from 'primeng/dragdrop';
import { ToastModule } from 'primeng/toast';
import { HeaderModule } from 'src/app/components/header/header.module';
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
    CardModule,
    ButtonModule,
    ToastModule,
    HeaderModule,
    ModalCardDetailModule,
    ConfirmDialogModule,
    MarkdownModule.forRoot(),
  ],
  exports: [HomeComponent],
  providers: [HomeService, MessageService, ConfirmationService],
})
export class HomeModule {}
