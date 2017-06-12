import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SuperLista } from '../../comum/superlista.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaDisciplinaComponent extends SuperLista implements OnInit {

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute) { 
    super(service, router, route);

    this.cols = [ 
      {field: 'id', header: 'Código'}, 
      {field: 'nome', header: 'Nome'}
    ];
  }
}
