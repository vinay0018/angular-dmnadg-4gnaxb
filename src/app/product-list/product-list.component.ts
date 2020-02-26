import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  cart: any = [];
  totalPrice: number = 0;
  products: any = [
    {
      name: "IR Item 1",
      price: 125
    },
    {
      name: "IR Item 2",
      price: 250
    },
    {
      name: "IR Item 3",
      price: 350
    }
  ];

  constructor(private httpClient: HttpClient) {
    // this.getProductData();
  }



  ngOnInit() {
    // this.getProductData().toPromise().then(result => {
    //   console.log(result);
    //   this.products = result;
    // });
  }

  getProductData() {
    // console.log('fetch products');
    //   return this.httpClient.get('assets/product.json');
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


//  deleteItems() {
//   localStorage.clear(this.totalPrice);
//  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/