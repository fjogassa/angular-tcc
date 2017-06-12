import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCursoComponent } from './crud/crud.component';
import { ListaCursoComponent } from './lista/lista.component';
import { DetalheCursoComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  {
    path: 'curso', component: CrudCursoComponent,
    children: [
      { path: '', component: ListaCursoComponent },
      { path: 'detalhe/:id', component: DetalheCursoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {

  constructor() {

  }

 }
