import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
