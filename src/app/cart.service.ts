import { Injectable } from '@angular/core';
import { Iproduct } from './interface/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Iproduct> = [];


  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
    console.log(this.items);
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
