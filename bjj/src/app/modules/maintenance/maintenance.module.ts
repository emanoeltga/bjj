import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AcademiaComponent } from './pages/academia/academia.component';
import { AtletaComponent } from './pages/atleta/atleta.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CreateAcademiaComponent } from './pages/academia/create-academia/create-academia.component';
import { EditAcademiaComponent } from './pages/academia/edit-academia/edit-academia.component';
import { DeleteAcademiaComponent } from './pages/academia/delete-academia/delete-academia.component';
import { CreateAtletaComponent } from './pages/atleta/create-atleta/create-atleta.component';
import { EditAtletaComponent } from './pages/atleta/edit-atleta/edit-atleta.component';
import { DeleteAtletaComponent } from './pages/atleta/delete-atleta/delete-atleta.component';
import { CreateCategoriaComponent } from './pages/categoria/create-categoria/create-categoria.component';
import { EditCategoriaComponent } from './pages/categoria/edit-categoria/edit-categoria.component';
import { DeleteCategoriaComponent } from './pages/categoria/delete-categoria/delete-categoria.component';


@NgModule({
  declarations: [
    AcademiaComponent,
    AtletaComponent,
    CategoriaComponent,
    UsuarioComponent,
    CreateAcademiaComponent,
    EditAcademiaComponent,
    DeleteAcademiaComponent,
    CreateAtletaComponent,
    EditAtletaComponent,
    DeleteAtletaComponent,
    CreateCategoriaComponent,
    EditCategoriaComponent,
    DeleteCategoriaComponent,

  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    DecimalPipe,
  ], exports:[

  ]
})
export class MaintenanceModule { }
