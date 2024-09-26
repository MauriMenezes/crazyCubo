import { Injectable } from '@angular/core';
import { Iproduct } from './interface/Iproduct';

import * as productData from '../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Iproduct> = [];
  data: any = productData;

  constructor() { }

  addToCart(productId: any) {

    const product = this.data.arrayCube.find((product: { id: any; }) => product.id === productId);

    this.items.push(product);
  }
  getItems() {
    console.log(this.items);
    return this.items;
  }
  clearCart() {
    this.items = [];
  }
  removeFromCart(product: Iproduct) {
    this.items = this.items.filter(item => item !== product);
  }
  getTotalPrice(): number {
    let total: number = 0;
    for (const element of this.items) {

      total += element.price;
    }
    return total;

  }
}
