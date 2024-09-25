import { Component, signal } from '@angular/core';
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

  constructor(private cartService: CartService) { }

  addToCart(product: Iproduct) {
    this.cartService.addToCart(product);
    window.alert(`Seu pedido INFO é ${product}`);
  }
  getAll() {
    let prod = this.cartService.getItems();
  }



  public arrayCube = signal([{
    src: 'assets/img/mario.webp',
    title: 'CUBO MÁGICO MARIO VINCI CUBE',
    description: 'description',
    currency: "R$",
    price: 129

  }, {
    src: 'assets/img/qya.webp',
    title: 'CUBO MÁGICO 3X3X3 MOYU MEILONG',
    description: 'description',
    currency: "R$",
    price: 49

  }, {
    src: 'assets/img/piram.webp',
    title: 'PYRAMINX 3X3X3 QIYI QIMING A',
    description: 'description',
    currency: "R$",
    price: 50

  }, {
    src: 'assets/img/ys3m.webp',
    title: 'PYRAMINX 3X3X3 GAN STANDARD MAGNÉTICO',
    description: 'description',
    currency: "R$",
    price: 220

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'MOYU SUPER RS3M 2022 MAGLEV MAGNÉTICO',
    description: 'description',
    currency: "R$",
    price: 300

  }, {
    src: 'assets/img/cinco.webp',
    title: 'CUBO MÁGICO 5X5X5 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    currency: "R$",
    price: 89
  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'CUBO MÁGICO 3X3X3 HUAMENG YS3M MAGLEV',
    description: 'description',
    currency: "R$",
    price: 89

  }, {
    src: 'assets/img/quatro.webp',
    title: 'CUBO MÁGICO 4X4X4 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    currency: "R$",
    price: 28.5

  }, {
    src: 'assets/img/tick.webp',
    title: 'JOGO CUBO MÁGICO TICK CAGE YJ',
    description: 'description',
    currency: "R$",
    price: 219

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'title',
    description: 'description',
    currency: "R$",
    price: 125

  }
  ]);

}
