import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAlunoComponent } from './crud/crud.component';
import { ListaAlunoComponent } from './lista/lista.component';
import { DetalheAlunoComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  {
    path: 'aluno', component: CrudAlunoComponent,
    children: [
      { path: '', component: ListaAlunoComponent },
      { path: 'detalhe/:id', component: DetalheAlunoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
