import { Component } from '@angular/core';
import { NavBarComponent } from "../../_components/nav-bar/nav-bar.component";
import { CardsComponent } from '../../_components/cards/cards.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {






  arrayCube = [{
    src: 'assets/img/mario.webp',
    title: 'CUBO MÁGICO MARIO VINCI CUBE',
    description: 'description',
    currency: "R$",
    id: 12,
    price: 129,

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
    price: 50,
    id: 2


  }, {
    src: 'assets/img/ys3m.webp',
    title: 'PYRAMINX 3X3X3 GAN STANDARD MAGNÉTICO',
    description: 'description',
    currency: "R$",
    price: 220,
    id: 21


  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'MOYU SUPER RS3M 2022 MAGLEV MAGNÉTICO',
    description: 'description',
    currency: "R$",
    price: 300,
    id: 222

  }, {
    src: 'assets/img/cinco.webp',
    title: 'CUBO MÁGICO 5X5X5 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    currency: "R$",
    price: 89,
    id: 212
  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'CUBO MÁGICO 3X3X3 HUAMENG YS3M MAGLEV',
    description: 'description',
    currency: "R$",
    price: 89,
    id: 2123

  }, {
    src: 'assets/img/quatro.webp',
    title: 'CUBO MÁGICO 4X4X4 QIYI MP MAGNÉTICO COLOR',
    description: 'description',
    currency: "R$",
    price: 28.5,
    id: 2213

  }, {
    src: 'assets/img/tick.webp',
    title: 'JOGO CUBO MÁGICO TICK CAGE YJ',
    description: 'description',
    currency: "R$",
    price: 219,
    id: 22321

  }, {
    src: 'assets/img/fellow_cube_classic_pro_43209497_1_20201005144432.webp',
    title: 'title',
    description: 'description',
    currency: "R$",
    price: 125,
    id: 2212

  }
  ];

}
