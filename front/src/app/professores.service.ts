import { ProfessoresModel } from './professores/professores.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from './../environments/environment';


@Injectable({providedIn: 'root'})
export class ProfessoresService {
  constructor(private httpClient: HttpClient) { }
  ListarProfessores(): Observable<any>{
    return this.httpClient.get(environment.profsUrl);
  }
  cadastrarProfessor(Prof: ProfessoresModel): Observable<any>{
    return this.httpClient.post(environment.profsUrl, Prof);
  }
  atualizarProfessor(id: Number, name :string): Observable<any>{
    return this.httpClient.put(environment.profsUrl+'/'+id+'/'+name,null);
  }
  desativarProfessor(id: Number, at: Boolean): Observable<any>{
    return this.httpClient.put(environment.profsUrl+'/'+id+','+at,null);
  }
  excluirProfessor(id: Number): Observable<any>{
    return this.httpClient.delete(environment.profsUrl+'/'+id);
  }
}
