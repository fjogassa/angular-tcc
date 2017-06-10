import { Component, OnInit } from '@angular/core';
import { SuperLista } from '../../comum/superlista.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:DisciplinaService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ 
      {field: 'nome', header: 'Nome'}, 
      {field: 'curso.nome', header: 'Curso'}    
    ];
  }
}
