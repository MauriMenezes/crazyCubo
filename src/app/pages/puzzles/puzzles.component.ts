import { Component } from '@angular/core';
import { NavBarComponent } from '../../_components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-puzzles',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './puzzles.component.html',
  styleUrl: './puzzles.component.scss'
})
export class PuzzlesComponent {

}
