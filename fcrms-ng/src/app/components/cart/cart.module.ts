import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule
  ],
  providers:[CartService]
})
export class CartModule { }
