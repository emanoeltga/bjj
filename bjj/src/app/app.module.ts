import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { EventosComponent } from './modules/schedule/eventos/eventos.component';
import { RankComponent } from './modules/schedule/rank/rank.component';
import { KeyComponent } from './modules/schedule/key/key.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { MaintenanceModule } from './modules/maintenance/maintenance.module';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    RankComponent,
    KeyComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    SharedModule,
    MaintenanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
