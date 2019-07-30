import { Products } from './../../../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProductsBasedOnCategory(role){
    return this.http.get(Products.getProductsURL+`?role=${role}`)
  }

}
