
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { AlunoService } from '../aluno.service';
import { DisciplinaService } from './../disciplina.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaAlunos: any[];
  listaCursos: any[];
  listaDisciplinas: any[];

  constructor(
    private alunoService:AlunoService,
    private disciplinaService:DisciplinaService,
    private cursoService:CursoService
  ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {

    this.alunoService.getAll().then(response=>{
      this.listaAlunos = response.values;
    });

    this.disciplinaService.getAll().then(response=>{
      this.listaDisciplinas = response.values;
    });

    this.cursoService.getAll().then(response=>{
      this.listaCursos = response.values;
    });
  }

}
