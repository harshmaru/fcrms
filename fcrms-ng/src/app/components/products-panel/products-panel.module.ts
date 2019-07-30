import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPanelRoutingModule } from './products-panel-routing.module';
import { ProductsPanelComponent } from './products-panel.component';
import { ProductsPanelService } from './products-panel.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsPanelRoutingModule
  ],
  declarations: [ProductsPanelComponent],
  providers:[ProductsPanelService]
})
export class ProductsPanelModule { }
