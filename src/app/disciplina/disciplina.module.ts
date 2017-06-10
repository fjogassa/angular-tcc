import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CrudComponent } from './crud/crud.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRoutingModule
  ],
  declarations: [ListaComponent, CrudComponent, DetalheComponent]
})
export class DisciplinaModule { }
