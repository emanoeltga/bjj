import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiaComponent } from './pages/academia/academia.component';
import { AtletaComponent } from './pages/atleta/atleta.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path:"academia", component: AcademiaComponent},
  {path:"atleta", component: AtletaComponent},
  {path:"categoria", component: CategoriaComponent},
  {path:"usuario", component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
