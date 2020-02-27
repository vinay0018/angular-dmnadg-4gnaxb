import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize} from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<any> {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get<any>('../../assets/products.json', {headers: httpHeaders });
  }
}