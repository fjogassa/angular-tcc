import { Http, Headers, Response } from '@angular/http';

export class SuperService {

  protected baseUrl = 'http://23.239.2.85/alunos-api/api';
  protected collection = '';
  protected http:Http;

  constructor(colecao:string, http: Http) { 
      this.http=http;
      this.collection=colecao;
  }

  errorHandler = error => console.error('CursoService error', error);
  
  add(objeto) {
    console.log('SuperService/Add: ' + objeto);
    return this.http.post(`${this.baseUrl}/${this.collection}`, objeto)
      .toPromise()
      .catch(this.errorHandler);
  }

  getAll():Promise<any> {
    console.log('SuperService/GetAll');
    return this.http.get(`${this.baseUrl}/${this.collection}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  getOne(id):Promise<any> {
    console.log('SuperService/GetOne: ' + id);
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  newObject():Promise<any> {
    console.log('SuperService/NewObject');
    return this.http.get(`${this.baseUrl}/${this.collection}/new`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  remove(id) {
    console.log('SuperService/Remove: ' + id);
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    console.log('SuperService/Update: ' + objeto);
    return this.http.put(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  
}
