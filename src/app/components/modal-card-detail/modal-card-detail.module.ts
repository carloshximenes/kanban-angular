import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ModalCardDetailComponent } from './modal-card-detail.component';

@NgModule({
  declarations: [ModalCardDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
  ],
  exports: [ModalCardDetailComponent],
  providers: [],
})
export class ModalCardDetailModule {}
