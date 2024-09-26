import { Component, signal, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { Iproduct } from '../../interface/Iproduct';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() id: any = 0;





  constructor(private cartService: CartService) { }

  addToCartById(id: any) {
    this.cartService.addToCart(this.id);
    window.alert(`pedido adicionado ao carrinho`);
  }
  getAll() {
    let prod = this.cartService.getItems();
  }

  getFormattedPrice(price: number): string {
    return price.toFixed(2).replace('.', ',');
  }




}
