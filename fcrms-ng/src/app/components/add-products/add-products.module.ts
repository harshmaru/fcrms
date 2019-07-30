import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AddProductsRoutingModule } from './add-products-routing.module';
import { AddProductsComponent } from './add-products.component';
import { AddProductsService } from './add-products.service';

@NgModule({
  imports: [CommonModule, AddProductsRoutingModule, ReactiveFormsModule],
  providers: [AddProductsService],
  declarations: [AddProductsComponent]
})
export class AddProductsModule {}
