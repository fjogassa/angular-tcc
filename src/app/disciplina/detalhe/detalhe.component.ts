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
  selecionado = {itens: []};
  listaSelecionado = {alunos: []};  
  colunas: any[];
  aluno;

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute, 
    private alunoService: AlunoService) {
      super(service, router, route);
  }

  inserirAluno(){
    console.log('DetalheComponent/Inserir Aluno: ' + this.selecionado.itens, this.aluno);
     
    if (!this.selecionado.itens) {
      console.log('DetalheComponent/********1******: ' + this.selecionado.itens);
      this.selecionado.itens = [];
    }
    console.log('DetalheComponent/********2******: ' + this.selecionado.itens);
    this.selecionado.itens.push({aluno:this.aluno, quantidade:1});
    console.log('DetalheComponent/********3******: ' + this.selecionado.itens);
    this.aluno = null;

    console.log('DetalheComponent/Inserir Aluno/Final: ' + this.selecionado.itens);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAlunos();

    this.colunas = [
            {field: 'nome', header: 'Nome'},
            {field: 'quantidade', header: 'Quantidade'}
        ];
  }

  atualizaAlunos() {
    console.log('DetalheComponent/Atualizar Aluno: ' + this.selecionado.itens, this.aluno);
    this.alunoService.getAll().then(response => {
      this.listaAlunos = response.values;
    });
  }

  filtrarAlunos(event) {
    console.log('DetalheComponent/Filtar Aluno: ' + this.selecionado.itens, this.aluno);
    let query = event.query;
    this.alunoService.filtra(query).then(response => {
      this.listaAlunos = response.values;
    });
  }

  salvar() {
    console.log('DetalheComponent/Salvar/Inicio: ' + this.selecionado);

    for (let i = 0; i < this.selecionado.itens.length; i++) {
      this.listaSelecionado.alunos = this.selecionado.itens;
    }

    console.log('DetalheComponent/Salvar/Fim: ' + this.selecionado);
    
    this.service.add(this.listaSelecionado)
      .then((data) => this.router.navigate(['../..'], { relativeTo: this.route }));
  }  

}
