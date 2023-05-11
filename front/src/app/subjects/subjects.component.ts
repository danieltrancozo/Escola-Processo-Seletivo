import { SubjectsModel } from './subjects.model';
import { SubjectsService } from '../subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private SubjectsService:SubjectsService) { }
  subjects: Array<any> = new Array;
  subject: SubjectsModel = new SubjectsModel();
  subcreate: SubjectsModel = new SubjectsModel();

  ngOnInit(): void {
    this.ListSubjects();
  }
  AddSubject(s:SubjectsModel){
    this.SubjectsService.CreateSubject(s).subscribe(sbj=>{
      this.subcreate = new SubjectsModel;
      this.ListSubjects();
    },error=>{
      console.log('Erro ao cadastrar matéria',error);
    });
  }
  ListSubjects(){
    this.SubjectsService.ListSubjects().subscribe(sbjs=>{
      this.subjects = sbjs;
    },error=>{
      console.log('Erro ao listar matérias', error);
    })
  }
  UpdateSubject(s1: SubjectsModel, s2: SubjectsModel){
    s2.w1 != null ? this.SubjectsService.UpdateSubject(s1.id,1,s2.w1).subscribe(sbjs=>{
      this.subcreate = new SubjectsModel;
      this.ListSubjects();
    },error=>{
      console.log('Erro ao alterar o peso da primeira avaliação da matéria '+s1.name+'.',error)
    }) : console.log('');
    s2.w2 != null ? this.SubjectsService.UpdateSubject(s1.id,2,s2.w2).subscribe(sbjs=>{
      this.subcreate = new SubjectsModel;
      this.ListSubjects();
    },error=>{
      console.log('Erro ao alterar o peso da segunda avaliação da matéria '+s1.name+'.',error);
    }) : console.log('');
    s2.w3 != null ? this.SubjectsService.UpdateSubject(s1.id,3,s2.w3).subscribe(sbjs=>{
      this.subcreate = new SubjectsModel;
      this.ListSubjects();
    },error=>{
      console.log('Erro ao alterar o peso da terceira avaliação da matéria '+s1.name+'.',error);
    }) : console.log('');
  }
  DeleteSubject(id: Number){
    this.SubjectsService.DeleteSubject(id).subscribe(sbjs=>{
      this.ListSubjects();
    },error=>{
      console.log('Erro ao deletar matéria',error);
    });
  }

}
