import { Component } from '@angular/core';
import { NavBarComponent } from "../../_components/nav-bar/nav-bar.component";
import { CartService } from '../../cart.service';
import { Iproduct } from '../../interface/Iproduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(private cartService: CartService) { }


  getProduct() {
    return this.cartService.getItems();
  }
  getTotalPrice(): any {
    let num = this.cartService.getTotalPrice();
    return num;
  }
  removeProduct(product: Iproduct) {
    this.cartService.removeFromCart(product);
    this.getTotalPrice();
  }
}
