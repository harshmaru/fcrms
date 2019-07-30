import { ProductsPanel } from 'src/config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddProductsService {
  constructor(private http: HttpClient) { }

  addOwnedProduct(product){
    return this.http.post(ProductsPanel.addOwnedProductURL,product);
  }
  getOwnedProductByID(pid,uid){
    return this.http.get(ProductsPanel.getOwnedProductURL+`?pid=${pid}&uid=${uid}`);
  }
  updateOwnedProduct(product){
    return this.http.post(ProductsPanel.updateOwnedProductURL,product);
  }

}
