import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../_components/nav-bar/nav-bar.component";
import { CardsComponent } from '../../_components/cards/cards.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { NgFor } from '@angular/common';
import * as cubeData from '../../../assets/data/products.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: any = cubeData;


  ngOnInit(): void {
    console.log(this.data.arrayCube);
  }



}
