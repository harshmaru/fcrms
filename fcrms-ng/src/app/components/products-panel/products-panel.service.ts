import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsPanel } from 'src/config';


@Injectable({
  providedIn: 'root'
})
export class ProductsPanelService {

  constructor(private http:HttpClient) { }

  getProductsBasedOnUID(uid){
    return this.http.get(ProductsPanel.getAllOwnedProductsURL+`?id=${uid}`)
  }

  deleteOwnedProduct(pid){
    return this.http.get(ProductsPanel.deleteOwnedProductURL+`?pid=${pid}`)
  }

}
