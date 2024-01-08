import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { InstrumentosTrabajoComponent } from './pages/instrumentos-trabajo/instrumentos-trabajo.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { AltasComponent } from './pages/gestion/altas/altas.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PagesComponent,
    SettingsComponent,
    InstrumentosTrabajoComponent,
    SublevelMenuComponent,
    AltasComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
