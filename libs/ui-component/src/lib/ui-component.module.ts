import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class UiComponentModule {}
