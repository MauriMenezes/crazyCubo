import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcessoriosComponent } from './pages/acessorios/acessorios.component';
import { PuzzlesComponent } from './pages/puzzles/puzzles.component';

export const routes: Routes = [{ path: '', component: HomeComponent },  // rota para a página inicial
{ path: 'acessorios', component: AcessoriosComponent },  // rota para a página 'acessorios',  // rota para a página inicial
{ path: 'puzzles', component: PuzzlesComponent }];
