import { Component, OnInit } from '@angular/core';
import { SuperCrud} from '../../comum/supercrud.component';
import { CursoService } from '../../curso.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudCursoComponent extends SuperCrud implements OnInit {

  constructor(service: CursoService) {
    super(service);
  }

}
