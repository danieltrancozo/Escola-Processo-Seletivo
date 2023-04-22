import { studentModel } from './students.model';
import { StudentsService } from '../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private StudentsService: StudentsService) { }
  students: Array<any> =  new Array
  student: studentModel = new studentModel()

  ngOnInit(): void {
    this.ListStudents()
  }
  AddStudents(nome: String, idt: Number){
    this.StudentsService.InputStudent(this.student).subscribe(st=>{
      this.student = new studentModel
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
  UpdateStudent(id: Number, no: string, tu: Number){
    this.StudentsService.UpdateStudent(id,no,tu).subscribe(
      aluns=>{
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
