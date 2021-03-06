import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from './../../aluno.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { CursoService } from '../../curso.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheAlunoComponent extends SuperDetalhes implements OnInit {

  cursos = [];

  constructor(service: AlunoService, router: Router, route: ActivatedRoute, 
    private cursoService: CursoService) {
      super(service, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaCursos();
  }

  atualizaCursos() {
    this.cursoService.getAll().then(response => {
      this.cursos = response.values;
    });
  }

  filtrarCursos(event) {
    let query = event.query;
    this.cursoService.filtra(query).then(response => {
      this.cursos = response.values;
    });
  }
}
