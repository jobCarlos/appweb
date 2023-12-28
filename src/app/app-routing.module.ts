import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InstrumentosTrabajoComponent } from './pages/instrumentos-trabajo/instrumentos-trabajo.component';

const routes: Routes = [
  {path: '',redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'instrumentos-trabajo', component: InstrumentosTrabajoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
