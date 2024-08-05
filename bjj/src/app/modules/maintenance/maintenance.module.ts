import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AcademiaComponent } from './pages/academia/academia.component';
import { AtletaComponent } from './pages/atleta/atleta.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


@NgModule({
  declarations: [
    AcademiaComponent,
    AtletaComponent,
    CategoriaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
