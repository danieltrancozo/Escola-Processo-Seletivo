import { StudentsService } from '../students.service';
import { SubjectsService } from '../subjects.service';
import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';
import { GradesService } from '../grades.service';
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

  classes: Array<any> = new Array;
  class: classesModel = new classesModel();
  clcr: classesModel = new classesModel();
  students: Array<any> =  new Array;
  student: studentModel = new studentModel();
  grades: Array<any> = new Array;
  grade: GradesModel = new GradesModel();
  subjects: Array<any> = new Array;
  temp: any;
  b: any;
  t: any;
  stname: any;
  title: any;

  constructor(private ClassesService: ClassesService,
     private GradesService: GradesService,
     private SubjectsService: SubjectsService,
     private StudentsService: StudentsService) { }

  ngOnInit(): void {
    this.ListClasses();
    this.b = document.getElementById('boletin');
    this.t = document.getElementById('students');
    this.title = document.getElementById('title');
    this.stname = document.getElementById('studentName');
  }
  CreateClass(cl: classesModel){
    this.ClassesService
        .CreateClass(cl)
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
      this.updateClasses(id)
      this.ListClasses()
    }, Error=>{
      console.log('Erro ao listar alunos!',Error);
    })
  }
  boletin(st: any){
    this.GradesService.ListGrades().subscribe(grads=>{
      let grs =[];
      this.grades = grads;
      for(let i = 0; i < this.grades.length; i++){
        if(this.grades[i].idstudent == st.id){
          grs.push(this.grades[i]);
        }
      }
      this.grades = grs;
    },error=>{
      console.log('Erro ao listar notas do aluno.',error);
    });
    this.b.style.display='inline';
  }
  Simulate(id: Number){
    this.StudentsService.SimulateStudent(id).subscribe(st=>{
      this.student = st;
    }, error=>{
      console.log('Erro ao simular aprovação do aluno.',error);
    });
  }
  e1(){
    this.t.style.display='none';
  }
  e2(){
    this.b.style.display='none';
  }
  SubjectName(subject: Number){
    this.SubjectsService.ListSubjects().subscribe(sbjs=>{
      let sbjcts = [];
      this.subjects = sbjs;
      for(let i = 0; i < this.subjects.length; i++){
        if(this.subjects[i].id == subject){
          sbjcts.push(this.subjects[i]);
        }
      }
      this.subjects = sbjcts;
    });
    return(this.subjects[0].name);
  }
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
    });
  }
}
