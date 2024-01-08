import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InstrumentosTrabajoComponent } from './pages/instrumentos-trabajo/instrumentos-trabajo.component';
import { AltasComponent } from './pages/gestion/altas/altas.component';
import { ConsultasComponent } from './pages/gestion/consultas/consultas.component';

const routes: Routes = [
  {path: '',redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {
    path: 'gestion',
    loadChildren: () => import('./pages/gestion/gestion.module').then(m => m.GestionModule) 
  },
  {path: 'instrumentos-trabajo', component: InstrumentosTrabajoComponent},
  {path: 'altas',component: AltasComponent},
  {path: 'consultas', component: ConsultasComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
