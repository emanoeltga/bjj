import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { MaintenanceRoutingModule } from '../modules/maintenance/maintenance-routing.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeRoutingModule,
    MaintenanceRoutingModule
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
