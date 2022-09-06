import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";

import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenubarModule, ButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
