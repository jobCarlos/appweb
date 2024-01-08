import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { ConsultasComponent } from './consultas/consultas.component';


@NgModule({
  declarations: [
    GestionComponent,
    ConsultasComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
