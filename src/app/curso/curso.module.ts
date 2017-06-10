import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaComponent } from './lista/lista.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  declarations: [ListaComponent, DetalheComponent, CrudComponent]
})
export class CursoModule { }
