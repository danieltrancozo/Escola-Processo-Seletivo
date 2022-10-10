import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from './../environments/environment';
import { TurmasModel } from './turmas/turmas.model';
import { alunoModel } from './alunos/alunos.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private httpClient: HttpClient) { }

  inputAluno(aluno: alunoModel): Observable<any>{
    return this.httpClient.post(environment.alunosURL, aluno);
  }
  lsAlunos(): Observable<any> {
    return this.httpClient.get(environment.alunosURL);
  }
  alterarAluno(id: Number, no: string, tu: Number): Observable<any>{
    return this.httpClient.put(environment.alunosURL+'/update/'+id+'/'+no+'/'+tu,null);
  }
  desativarAluno(id: Number, at: boolean, t: Number): Observable<any>{
    return this.httpClient.put(environment.alunosURL+'/'+id+','+at+','+t, null);
  }
  excluirAluno(id: Number): Observable<any>{
    return this.httpClient.delete(environment.alunosURL+'/'+id);
  }
}
