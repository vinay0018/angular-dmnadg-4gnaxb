import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductList() {
    this.httpClient.get('src/app/assets/products.json');
  }
}