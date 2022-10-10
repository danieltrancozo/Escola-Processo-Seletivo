import { alunoModel } from './alunos/alunos.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from './../environments/environment';
import { TurmasModel } from './turmas/turmas.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  constructor(private httpClient: HttpClient) { }
  ListarTurmas(): Observable<any>{
    return this.httpClient.get(environment.turmasUrl);
  }
  cadastrarTurma(turma: TurmasModel): Observable<any>{
    return this.httpClient.post(environment.turmasUrl, turma);
  }
  desativarTurma(id: Number, at: boolean): Observable<any>{
    return this.httpClient.put(environment.turmasUrl+'/'+id+'/'+at, null);
  }
  exibirTurma(): Observable<any>{
    return this.httpClient.get(environment.alunosURL);
  }
  updateTurma(id: Number, ct: Number): Observable<any>{
    return this.httpClient.put(environment.turmasUrl+'/update/'+id+'/'+ct,null);
  }
  excluirTurma(id: Number): Observable<any>{
    return this.httpClient.delete(environment.turmasUrl+'/'+id);
  }
  inputAluno(aluno: alunoModel): Observable<any>{
    return this.httpClient.post(environment.alunosURL, aluno);
  }
}
