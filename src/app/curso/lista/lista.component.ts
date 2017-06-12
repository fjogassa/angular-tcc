import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../curso.service';
import { SuperLista } from '../../comum/superlista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaCursoComponent extends SuperLista implements OnInit {

  constructor(service:CursoService, router:Router, route: ActivatedRoute) { 

    super(service, router, route);
    
    this.cols = [ 
      {field: 'nome', header: 'Nome'},
      {field: 'version', header: 'Versão'}
    ];
  }

}
