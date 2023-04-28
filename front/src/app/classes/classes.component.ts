import { StudentsService } from '../students.service';
import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';
import { classesModel } from './classes.model';
import { studentModel } from '../students/students.model';
import { GradesModel } from '../grades/grades.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes: Array<any> = new Array
  class: classesModel = new classesModel()
  clcr: classesModel = new classesModel()
  students: Array<any> =  new Array
  student: studentModel = new studentModel()
  grades: Array<any> = new Array
  grade: GradesModel = new GradesModel()
  temp: any;
  b: any;
  t: any;
  title: any;

  constructor(private ClassesService: ClassesService) { }

  ngOnInit(): void {
    this.ListClasses();
    this.b = document.getElementById('boletin')
    this.t = document.getElementById('students')
    this.title = document.getElementById('title')
  }
  CreateClass(vol: Number){
    console.log(this.clcr);
    this.ClassesService
        .CreateClass(this.clcr)
        .subscribe(cls=>{
          this.clcr= new classesModel;
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
  DeleteClass(id: Number){
    this.ClassesService.DeleteClass(id).subscribe(Classes=>{
      this.ListClasses();
    }, Error=>{
      console.log('Erro ao excluir Turma!',Error);
    })
  }
  ShowClass(id: Number){
    this.t.style.display = 'inline';
    this.title.innerText='Lista de alunos da Turma '+ id +'!';
    this.ClassesService.ShowClass().subscribe(students=>{
      let a = [];
      this.students = students;
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].idclass==id){
          a.push(this.students[i]);
        }
      }
      this.students = a;
      console.log(this.students.length)
      this.updateClasses(id)
      this.ListClasses()
    }, Error=>{
      console.log('Erro ao listar alunos!',Error);
    })
  }
  addStudent(id: Number, vol: Number){//função falhou!
    delay(3)
    let s = new studentModel
    let v = Number(vol)
    for(let i = 0; i < v; i++){
      s.name = 'student'+i;
      s.idclass = id;
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
    this.ClassesService.ShowClass().subscribe(students=>{
      let a = [];
      this.students = students;
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].idclass==id){
          a.push(this.students[i]);
        }
      }
      this.students = a;
    })
    this.ClassesService.UpdateClass(id,this.students.length).subscribe();
  }
  ListClasses(){
    this.ClassesService.ListClasses().subscribe(Classes=>{
      this.classes = Classes;
    },Error=>{
      console.log('Erro ao listar turmas!',Error);
      alert('Erro ao carregar a lista de Classes pode significar que ocorreu um erro de CORS! Tente reabrir no navegador com o web-security desativado.')
    })
  }
}
