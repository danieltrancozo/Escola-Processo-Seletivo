import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../turmas.service';
import { TurmasModel } from './turmas.model';
import { alunoModel } from '../alunos/alunos.model';
import { notasModel } from '../notas/notas.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turms: Array<any> = new Array
  turma: TurmasModel = new TurmasModel()
  alunos: Array<any> =  new Array
  aluno: alunoModel = new alunoModel()
  notas: Array<any> = new Array
  nota: notasModel = new notasModel()
  temp: any;
  b: any;
  t: any;
  titulo: any;

  constructor(private turmasService: TurmasService) { }

  ngOnInit(): void {
    this.ListarTurmas();
    this.b = document.getElementById('boletin')
    this.t = document.getElementById('alunos')
    this.titulo = document.getElementById('titulo')
    var here = document.getElementById('turma')
  }
  cadastrarTurma(vol: Number){
    console.log(this.turma);
    this.turmasService.cadastrarTurma(this.turma).subscribe(Turms=>{
      this.turma= new TurmasModel;
      this.temp = Turms;
    }, Error=>{
      console.log('Erro ao cadastrar turma!',Error);
    });
    this.ListarTurmas();
  }
  desativarTurma(id: Number, at: boolean){
    at = !at;
    this.turmasService.desativarTurma(id, at).subscribe(turma=>{
      this.ListarTurmas();
    }, Error=>{
      console.log('Erro ao ativar/desativar turma!', Error);
    })
  }
  excluirTurma(id: Number){
    this.turmasService.excluirTurma(id).subscribe(Turmas=>{
      this.ListarTurmas();
    }, Error=>{
      console.log('Erro ao excluir Turma!',Error);
    })
  }
  exibirTurma(id: Number){
    this.t.style.display = 'inline';
    this.titulo.innerText='Lista de alunos da turma '+ id +'!';
    this.turmasService.exibirTurma().subscribe(aluns=>{
      let a = [];
      this.alunos = aluns;
      for(let i=0;i<this.alunos.length;i++){
        if(this.alunos[i].idturma==id){
          a.push(this.alunos[i]);
        }
      }
      this.alunos = a;
      console.log(this.alunos.length)
      this.updateTurmas(id)
      this.ListarTurmas()
    }, Error=>{
      console.log('Erro ao listar alunos!',Error);
    })
  }
  addAluno(id: Number, vol: Number){//função falhou!
    delay(3)
    let a = new alunoModel
    for(let i = 0; i<vol;i++){
      a.nome = 'Aluno'+i;
      a.idturma = id;
      this.turmasService.inputAluno(a)
    }
    return(vol)
  }
  boletin(id: Number){
    this.b.style.display='inline';
  }
  Simular(id: Number){}
  e1(){
    this.t.style.display='none';
  }
  e2(){
    this.b.style.display='none';
  }
  materiaName(){}//sem tempo para implementar funções vazias.
  media(){}
  mediafinal(){}
  updateTurmas(id: Number){
    this.turmasService.exibirTurma().subscribe(aluns=>{
      let a = [];
      this.alunos = aluns;
      for(let i=0;i<this.alunos.length;i++){
        if(this.alunos[i].idturma==id){
          a.push(this.alunos[i]);
        }
      }
      this.alunos = a;
    })
    this.turmasService.updateTurma(id,this.alunos.length).subscribe();
  }
  ListarTurmas(){
    this.turmasService.ListarTurmas().subscribe(Turms=>{
      this.turms = Turms;
    },Error=>{
      console.log('Erro ao listar turmas!',Error);
      alert('Erro ao carregar a lista de turmas pode significar que ocorreu um erro de CORS! Tente reabrir no navegador com o web-security desativado.')
    })
  }
}
