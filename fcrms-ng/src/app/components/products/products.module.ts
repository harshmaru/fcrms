import { AddAddressComponent } from './../add-address/add-address.component';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent],
  providers: [ProductsService,CartService]
})
export class ProductsModule { }
