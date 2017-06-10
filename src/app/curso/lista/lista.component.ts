import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../curso.service';
import { SuperLista } from '../../comum/superlista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:CursoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ 
      {field: 'nome', header: 'Nome'},
      {field: 'version', header: 'Versão'}
    ];
  }

}
