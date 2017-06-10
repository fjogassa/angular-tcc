import { AlunoService } from './../../aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent extends SuperDetalhes implements OnInit {

  alunos = [];
  selecionado = {itens:[]};
  aluno;

  constructor(service: AlunoService, router: Router, route: ActivatedRoute, private alunoService: AlunoService) {
    super(service, router, route);
  }

  inserirAluno(){
     console.log(this.selecionado.itens,this.aluno);
     if (!this.selecionado.itens){
       this.selecionado.itens=[];
     }
     this.selecionado.itens.push({produto:this.aluno, quantidade:1});
     this.aluno = null;
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAluno();

  }

  atualizaAluno() {
    this.alunoService.getAll().then(response => {
      this.alunos = response.values;
    });
  }

  filtrarAlunos(event) {
    let query = event.query;
    this.alunoService.filtra(query).then(response => {
      this.alunos = response.values;
    });
  }
}
