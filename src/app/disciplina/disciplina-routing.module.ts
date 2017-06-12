import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudDisciplinaComponent } from './crud/crud.component';
import { ListaDisciplinaComponent } from './lista/lista.component';
import { DetalheDisciplinaComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  {
    path: 'disciplina', component: CrudDisciplinaComponent,
    children: [
      { path: '', component: ListaDisciplinaComponent },
      { path: 'detalhe/:id', component: DetalheDisciplinaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
