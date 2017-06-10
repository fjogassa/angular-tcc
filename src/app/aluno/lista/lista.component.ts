import { Component, OnInit } from '@angular/core';
import { AlunoService } from './../../aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

   constructor(service:AlunoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ 
      {field: 'nome', header: 'Nome'}, 
      {field: 'quantidade', header: 'Quantidade'},
      {field: 'curso.nome', header: 'Curso'},    
    ];
  }

}
