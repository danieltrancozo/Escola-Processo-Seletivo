import { TeachersService } from '../teachers.service';
import { Component, OnInit } from '@angular/core';
import { TeachersModel } from './teachers.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  profs: Array<any> = new Array
  prof: TeachersModel = new TeachersModel()
  constructor(private teachersService: TeachersService) { }

  ngOnInit(): void {
    this.ListTeachers();
  }
  CreateTeacher(){
    console.log(this.prof);
    this.teachersService.CreateTeacher(this.prof).subscribe(Prof=>{
      this.prof= new TeachersModel;
      this.ListTeachers();
      alert("Professor cadastrado com sucesso!");
    }, Error=>{
      console.log('Erro ao cadastrar Professor!',Error);
    })
  }
  UpdateTeacher(id: Number){
    this.teachersService.UpdateTeacher(id,this.prof.name.toString()).subscribe(teachers =>{
      this.prof=new TeachersModel();
      this.ListTeachers();
      alert("Professor atualizado com sucesso!");
    },Error=>{console.log("Error ao atualizar professor!", Error);})
  }
  DeactivateTeacher(id: Number, at: boolean){
    at = !at;
    this.teachersService.DeactivateTeacher(id, at).subscribe(teachers=>{
      this.ListTeachers();
      if (at==true) alert('Professor ativado com sucesso!');
      if (at==false) alert('Professor desativado com sucesso!');
    }, Error=>{
      console.log('Erro ao ativar/desativar professor!', Error);
    })
  }
  DeleteTeacher(id: number){
    this.teachersService.DeleteTeacher(id).subscribe(teachers=>{
      this.ListTeachers();
      alert('Professor Excluido com sucesso!');
    }, Error=>{
      console.log('Erro ao excluir professor!',Error);
    })
  }
  ListTeachers(){
    this.teachersService.ListTeachers().subscribe(Profs=>{
      this.profs = Profs;
    },Error=>{
      console.log('Erro ao listar professores!',Error);
      alert('Erro ao carregar a lista de professores pode significar que ocorreu um erro de CORS! Tente reabrir no navegador com o web-security desativado.')
    })
  }
}
