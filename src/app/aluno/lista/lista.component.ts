import { Component, OnInit } from '@angular/core';
import { AlunoService } from './../../aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaAlunoComponent extends SuperLista implements OnInit {

   constructor(service: AlunoService, router: Router, route: ActivatedRoute) { 
    
    super(service, router, route);
    
    this.cols = [ 
      {field: 'nome', header: 'Nome'},      
      {field: 'curso.nome', header: 'Curso'},    
    ];
  }

}
