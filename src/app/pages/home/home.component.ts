import { Component } from '@angular/core';
import { NavBarComponent } from "../../_components/nav-bar/nav-bar.component";
import { CardsComponent } from '../../_components/cards/cards.component';
import { FooterComponent } from '../../_components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
