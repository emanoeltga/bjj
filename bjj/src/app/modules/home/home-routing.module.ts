import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RankComponent } from '../schedule/rank/rank.component';
import { EventosComponent } from '../schedule/eventos/eventos.component';
import { AcademiaComponent } from '../maintenance/pages/academia/academia.component';

const routes: Routes = [
  { path:"home", component: HomePageComponent },
  /*{ path:"ranks", component: RankComponent },
  { path:"eventos", component: EventosComponent },
  { path:"academias", component: AcademiaComponent },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
