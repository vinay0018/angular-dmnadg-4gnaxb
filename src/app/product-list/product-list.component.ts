import { Component, OnInit } from '@angular/core';
import {ProductService} from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  cart: any = [];
  totalPrice: number = 0;
  products: any = [];
  IceCreamRolls: any = [];
  GourmetPlates: any = [];
  ExoticSandaes: any = [];
  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.getProductList().subscribe(res => {
      console.log(res);
      this.products = res;
      this.IceCreamRolls = this.products.slice(0, 20);
      this.GourmetPlates = this.products.slice(10, 20);
      this.ExoticSandaes = this.products.slice(20, 30);
    });
  }

  addIntoCart(product: any) {
    this.cart.push(product);
    this.totalPrice = this.totalPrice + product.price;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
  printComponent(cmpName) {
     let printContents = document.getElementById(cmpName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
  }

  emptyCart() {
    this.cart=[];
    this.totalPrice=0;
    sessionStorage.empty();
  }
//  deleteItems() {
//   localStorage.clear(this.totalPrice);
//  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/