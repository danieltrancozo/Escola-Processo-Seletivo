import { Component, OnInit } from '@angular/core';
import { GradesModel } from './grades.model';
import { GradesService } from '../grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(private GradesService: GradesService) { }
  grades: Array<any> = new Array;
  grade: GradesModel = new GradesModel();
  gradeUp: GradesModel = new GradesModel();

  ngOnInit(): void {
    this.ListGrades();
  }
  CreateGrade(grade: GradesModel){
    this.GradesService.CreateGrade(grade).subscribe(grd=>{
      this.gradeUp = new GradesModel;
      this.ListGrades();
    },error=>{
      console.log('Erro ao criar tabela de notas.',error);
    });
    alert('Lembre-se que ao criar uma nota, os valores das avaliações estarão zerados por padrão');
  }
  ListGrades(){
    this.GradesService.ListGrades().subscribe(grades=>{
      this.grades = grades;
    },error=>{
      console.log('Erro ao listar tabelas de notas',error);
    });
  }
  GiveGrades(grd: GradesModel, grdup: GradesModel){
    grdup.av1 != null ? this.GradesService.GradeUpdate(grd.id, 1, grdup.av1).subscribe(grades=>{
      this.gradeUp = new GradesModel;
      this.ListGrades();
    },error=>{
      console.log('Erro ao lançar a nota da primeira avaliação.',error);
    }) : console.log('');
    grdup.av2 != null ? this.GradesService.GradeUpdate(grd.id, 2, grdup.av2).subscribe(grades=>{
      this.gradeUp = new GradesModel;
      this.ListGrades();
    },error=>{
      console.log('Erro ao lançar a nota da segunda avaliação.',error);
    }) : console.log('');
    grdup.av3 != null ? this.GradesService.GradeUpdate(grd.id, 3, grdup.av3).subscribe(grades=>{
      this.gradeUp = new GradesModel;
      this.ListGrades();
    },error=>{
      console.log('Erro ao lançar a nota da terceira avaliação.',error);
    }) : console.log('');
  }
  FinalGrade(id: Number, final: Number){
    this.GradesService.GradeFinals(id,final).subscribe(finals=>{
      this.gradeUp = new GradesModel;
      this.ListGrades();
    },error=>{
      console.log('Erro ao registrar a nota final',error);
    });
  }
  DeleteGrade(id: Number){
    this.GradesService.DeleteGrade(id).subscribe(grd=>{
      this.ListGrades();
    },error=>{
      console.log('Erro ao deletar notas.',error);
    })
  }

}
