import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CrudComponent } from './crud/crud.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [ListaComponent, CrudComponent, DetalheComponent]
})
export class AlunoModule { }
