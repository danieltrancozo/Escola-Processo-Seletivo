import { StudentsService } from '../students.service';
import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';
import { classesModel } from './classes.model';
import { studentModel } from '../students/students.model';
import { GradesModel } from '../grades/grades.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-Classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  turms: Array<any> = new Array
  class: classesModel = new classesModel()
  students: Array<any> =  new Array
  student: studentModel = new studentModel()
  grades: Array<any> = new Array
  nota: GradesModel = new GradesModel()
  temp: any;
  b: any;
  t: any;
  titulo: any;

  constructor(private ClassesService: ClassesService) { }

  ngOnInit(): void {
    this.ListClasses();
    this.b = document.getElementById('boletin')
    this.t = document.getElementById('students')
    this.titulo = document.getElementById('titulo')
    var here = document.getElementById('Class')
  }
  CreateClass(vol: Number){
    console.log(this.class);
    this.ClassesService.CreateClass(this.class).subscribe(cls=>{
      this.class= new classesModel;
      this.temp = cls;
    }, Error=>{
      console.log('Erro ao cadastrar Turma!',Error);
    });
    this.ListClasses();
  }
  DeactivateClass(id: Number, at: boolean){
    at = !at;
    this.ClassesService.DeactivateClass(id, at).subscribe(Class=>{
      this.ListClasses();
    }, Error=>{
      console.log('Erro ao ativar/desativar Turma!', Error);
    })
  }
  excluirClass(id: Number){
    this.ClassesService.DeleteClass(id).subscribe(Classes=>{
      this.ListClasses();
    }, Error=>{
      console.log('Erro ao excluir Turma!',Error);
    })
  }
  ShowClass(id: Number){
    this.t.style.display = 'inline';
    this.titulo.innerText='Lista de students da Turma '+ id +'!';
    this.ClassesService.ShowClass().subscribe(aluns=>{
      let a = [];
      this.students = aluns;
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].idClass==id){
          a.push(this.students[i]);
        }
      }
      this.students = a;
      console.log(this.students.length)
      this.updateClasses(id)
      this.ListClasses()
    }, Error=>{
      console.log('Erro ao listar students!',Error);
    })
  }
  addStudent(id: Number, vol: Number){//função falhou!
    delay(3)
    let s = new studentModel
    let v = Number(vol)
    for(let i = 0; i < v; i++){
      s.nome = 'student'+i;
      s.idClass = id;
      this.ClassesService.InputStudent(s)
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
  SubjectName(){}//sem tempo para implementar funções vazias.
  media(){}
  mediafinal(){}
  updateClasses(id: Number){
    this.ClassesService.ShowClass().subscribe(aluns=>{
      let a = [];
      this.students = aluns;
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].idClass==id){
          a.push(this.students[i]);
        }
      }
      this.students = a;
    })
    this.ClassesService.UpdateClass(id,this.students.length).subscribe();
  }
  ListClasses(){
    this.ClassesService.ListClasses().subscribe(Turms=>{
      this.turms = Turms;
    },Error=>{
      console.log('Erro ao listar turmas!',Error);
      alert('Erro ao carregar a lista de Classes pode significar que ocorreu um erro de CORS! Tente reabrir no navegador com o web-security desativado.')
    })
  }
}
