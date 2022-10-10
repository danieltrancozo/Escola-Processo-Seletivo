import { alunoModel } from './alunos.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }
  alunos: Array<any> =  new Array
  aluno: alunoModel = new alunoModel()

  ngOnInit(): void {
    this.ListarAlunos()
  }
  AddAlunos(nome: String, idt: Number){
    this.alunosService.inputAluno(this.aluno).subscribe(aluns=>{
      this.aluno = new alunoModel
      this.ListarAlunos()
    }, Error=>{
      console.log('Erro ao cadastrar aluno', Error)
    })
  }
  ListarAlunos(){
    this.alunosService.lsAlunos().subscribe(aluns=>{
      this.alunos=aluns
    },error=>{
      console.log('Erro ao cadastrar alunos', error)
    });
  }
  alterarAluno(id: Number, no: string, tu: Number){
    this.alunosService.alterarAluno(id,no,tu).subscribe(
      aluns=>{
        this.aluno = new alunoModel
        this.ListarAlunos()
      },error=>{
        console.log('Erro ao alterar aluno', error)
      })
  }
  desativarAluno(id: Number, at: boolean, t: Number){
    let atv= !at
    this.alunosService.desativarAluno(id,atv,t).subscribe(aluns=>{
      this.aluno = new alunoModel
      this.ListarAlunos()
    }, error=>{
      console.log('Erro ao ativa/desativar auluno!', error)
    })
  }
  excluirAluno(id: Number){
    this.alunosService.excluirAluno(id).subscribe(aluns=>{
      this.ListarAlunos()
    }, Error=>{
      console.log('Erro ao excluir aluno', Error)
    })
  }
}
