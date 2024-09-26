import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../_components/nav-bar/nav-bar.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import * as acessoriesData from '../../../assets/data/products.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-acessorios',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, FooterComponent, NgFor],
  templateUrl: './acessorios.component.html',
  styleUrl: './acessorios.component.scss'
})
export class AcessoriosComponent implements OnInit {
  data: any = acessoriesData;
  ngOnInit(): void {
    console.log(this.data.accessories);
  }
}
