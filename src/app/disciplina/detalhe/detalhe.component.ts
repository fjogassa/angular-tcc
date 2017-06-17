import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from '../../aluno.service';
import { DisciplinaService} from '../../disciplina.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheDisciplinaComponent extends SuperDetalhes implements OnInit {

  listaAlunos = [];
  selecionado = {alunos: []};  
  aluno;

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute, 
    private alunoService: AlunoService) {
      super(service, router, route);
  }

  inserirAluno(){    
    if (!this.selecionado.alunos) {
      this.selecionado.alunos = [];
    }
    let antigo = this.selecionado.alunos;
    this.selecionado.alunos = [];
    for (let i = 0; i < antigo.length; i++) {
      this.selecionado.alunos.push(antigo[i]);
    } 
    this.selecionado.alunos.push(this.aluno);    
    this.aluno = null;
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAlunos();
  }

  atualizaAlunos() {    
    this.alunoService.getAll().then(response => {
      this.listaAlunos = response.values;
    });
  }

  filtrarAlunos(event) {    
    let query = event.query;
    this.alunoService.filtra(query).then(response => {
      this.listaAlunos = response.values;
    });
  }
}
