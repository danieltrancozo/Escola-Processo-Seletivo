import { ProfessoresService } from './../professores.service';
import { Component, OnInit } from '@angular/core';
import { ProfessoresModel } from './professores.model';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  profs: Array<any> = new Array
  prof: ProfessoresModel = new ProfessoresModel()
  constructor(private professoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.ListarProfessores();
  }
  cadastrarProf(){
    console.log(this.prof);
    this.professoresService.cadastrarProfessor(this.prof).subscribe(Prof=>{
      this.prof= new ProfessoresModel;
      this.ListarProfessores();
      alert("Professor cadastrado com sucesso!");
    }, Error=>{
      console.log('Erro ao cadastrar Professor!',Error);
    })
  }
  atualizarProfessor(id: Number){
    this.professoresService.atualizarProfessor(id,this.prof.name.toString()).subscribe(professores =>{
      this.prof=new ProfessoresModel();
      this.ListarProfessores();
      alert("Professor atualizado com sucesso!");
    },Error=>{console.log("Error ao atualizar professor!", Error);})
  }
  desativarProfessor(id: Number, at: boolean){
    at = !at;
    this.professoresService.desativarProfessor(id, at).subscribe(professores=>{
      this.ListarProfessores();
      if (at==true) alert('Professor ativado com sucesso!');
      if (at==false) alert('Professor desativado com sucesso!');
    }, Error=>{
      console.log('Erro ao ativar/desativar professor!', Error);
    })
  }
  excluirProfessor(id: number){
    this.professoresService.excluirProfessor(id).subscribe(professores=>{
      this.ListarProfessores();
      alert('Professor Excluido com sucesso!');
    }, Error=>{
      console.log('Erro ao excluir professor!',Error);
    })
  }
  ListarProfessores(){
    this.professoresService.ListarProfessores().subscribe(Profs=>{
      this.profs = Profs;
    },Error=>{
      console.log('Erro ao listar professores!',Error);
      alert('Erro ao carregar a lista de professores pode significar que ocorreu um erro de CORS! Tente reabrir no navegador com o web-security desativado.')
    })
  }
}
