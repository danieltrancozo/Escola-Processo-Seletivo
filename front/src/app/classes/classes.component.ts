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
    let cl = this.classes[this.classes.length-1];
    this.addStudent(cl.id,cl.volume);
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
      s.name = 'Aluno de Teste'+i;
      s.idclass = id;
      this.StudentsService.InputStudent(s).subscribe(st=>{
        s = new studentModel;
      },error=>{
        console.log('Erro ao adcionar alunos.', error);
      });
    }
    return(vol);
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
  Simular(id: Number){}
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
  media(grd: any){
    this.SubjectsService.ListSubjects().subscribe(sbjs=>{
      let sbs = [];
      this.subjects = sbjs;
      for(let i = 0; i < this.subjects.length; i++){
        if(this.subjects[i].id == grd.idsubject){
          sbs.push(this.subjects[i]);
        }
      }
      this.subjects = sbs;
    });
    return((this.subjects[0].w1*grd.av1+this.subjects[0].w2*grd.av2+this.subjects[0].w3*grd.av3)/(this.subjects[0].w1+this.subjects[0].w2+this.subjects[0].w3));
  }
  mediafinal(grd: any){
    let media;
    media = this.media(grd);
    if(media<=4){
      return(media);
    }
    else if(media>=6){
      return(media);
    }
    else{
      return((media+grd.avf)/2);
    }
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
