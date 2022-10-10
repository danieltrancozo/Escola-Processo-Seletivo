import { Element } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  prof: any;
  mat: any;
  turma: any;
  aluno: any;
  nota: any;
  init: any;
  getDivs(){
    this.prof = document.querySelector('div#Prof');
    this.mat = document.querySelector('div#Mat');
    this.turma = document.querySelector('div#Turma');
    this.aluno = document.querySelector('div#Aluno');
    this.nota = document.querySelector('div#Notas');
    this.init = document.querySelector('div#inicio');
  }
  reset(){
    this.getDivs()
    this.init.style.display = 'inline';
    this.prof.style.display = 'none';
    this.mat.style.display = 'none';
    this.turma.style.display = 'none';
    this.aluno.style.display = 'none';
    this.nota.style.display = 'none';
  }
  showProf(){
    this.reset();
    this.prof.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showMat(){
    this.reset();
    this.mat.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showTurma(){
    this.reset();
    this.turma.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showAluno(){
    this.reset();
    this.aluno.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showNotas(){
    this.reset();
    this.nota.style.display = 'inline';
    this.init.style.display = 'none';
  }
}
