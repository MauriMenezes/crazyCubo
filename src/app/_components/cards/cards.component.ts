import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
  public arrayCube = signal([{
    src: 'assets/img/mario.webp',
    title: 'CUBO MÁGICO MARIO VINCI CUBE',
    description: 'description',
    price: 'R$129,00'

  }, {
    src: 'assets/img/qya.webp',
    title: 'CUBO MÁGICO 3X3X3 MOYU MEILONG',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/piram.webp',
    title: 'PYRAMINX 3X3X3 QIYI QIMING A',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/ys3m.webp',
    title: 'PYRAMINX 3X3X3 GAN STANDARD MAGNÉTICO',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'CUBO MÁGICO 3X3X3 MOYU SUPER RS3M 2022 MAGLEV MAGNÉTICO',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/cinco.webp',
    title: 'CUBO MÁGICO 5X5X5 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'CUBO MÁGICO 3X3X3 HUAMENG YS3M MAGLEV',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/quatro.webp',
    title: 'CUBO MÁGICO 4X4X4 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/tick.webp',
    title: 'JOGO CUBO MÁGICO TICK CAGE YJ',
    description: 'description',
    price: 'price'

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'title',
    description: 'description',
    price: 'price'

  }
  ]);

}
