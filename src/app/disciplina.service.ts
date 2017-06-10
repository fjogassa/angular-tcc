import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SuperService } from './comum/superservice.service';

@Injectable()
export class DisciplinaService extends SuperService {

  constructor(http: Http) { 
    super('disciplina', http);
  }

}
