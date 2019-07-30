import { AddAddressComponent } from './components/add-address/add-address.component';
import { ProductsPanelComponent } from './components/products-panel/products-panel.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

import { NgxWebstorageModule } from "ngx-webstorage";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartModule } from './components/cart/cart.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoaderComponent, NavbarComponent, CartComponent, AddAddressComponent],
  imports: [
    NgxWebstorageModule.forRoot({ prefix: "", separator: "" }),
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule {}
