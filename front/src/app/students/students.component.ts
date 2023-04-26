import { studentModel } from './students.model';
import { StudentsService } from '../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private StudentsService: StudentsService) { }
  students: Array<any> =  new Array
  student: studentModel = new studentModel()
  stcr: studentModel = new studentModel()

  ngOnInit(): void {
    this.ListStudents()
  }
  AddStudents(stc: studentModel){
    this.StudentsService.InputStudent(this.stcr).subscribe(st=>{
      this.stcr = new studentModel
      this.ListStudents()
    }, Error=>{
      console.log('Erro ao cadastrar Student', Error)
    })
  }
  ListStudents(){
    this.StudentsService.lsStudents().subscribe(st=>{
      this.students=st
    },error=>{
      console.log('Erro ao cadastrar Students', error)
    });
  }
  UpdateStudent(id: Number, st: studentModel, stc: studentModel){
    let na;
    let cl;
    stc.name != null ? na = String(stc.name) : na = String(st.name);
    stc.idclass != null ? cl = stc.idclass : cl = st.idclass;
    this.StudentsService.UpdateStudent(id,na,cl).subscribe(
      students=>{
        this.student = new studentModel
        this.ListStudents()
      },error=>{
        console.log('Erro ao alterar Student', error)
      })
  }
  DeactivateStudent(id: Number, at: boolean, t: Number){
    let atv= !at
    this.StudentsService.DeactivateStudent(id,atv,t).subscribe(aluns=>{
      this.student = new studentModel
      this.ListStudents()
    }, error=>{
      console.log('Erro ao ativa/desativar auluno!', error)
    })
  }
  DeleteStudent(id: Number){
    this.StudentsService.DeleteStudent(id).subscribe(aluns=>{
      this.ListStudents()
    }, Error=>{
      console.log('Erro ao excluir Student', Error)
    })
  }
}
