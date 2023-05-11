import { Element } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  teacher: any;
  subject: any;
  class: any;
  student: any;
  grade: any;
  init: any;
  getDivs(){
    this.teacher = document.querySelector('div#Teachers');
    this.subject = document.querySelector('div#Subjects');
    this.class = document.querySelector('div#Classes');
    this.student = document.querySelector('div#Students');
    this.grade = document.querySelector('div#Grades');
    this.init = document.querySelector('div#Start');
  }
  reset(){
    this.getDivs()
    this.init.style.display = 'inline';
    this.teacher.style.display = 'none';
    this.subject.style.display = 'none';
    this.class.style.display = 'none';
    this.student.style.display = 'none';
    this.grade.style.display = 'none';
  }
  showTeachers(){
    this.reset();
    this.teacher.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showSubjects(){
    this.reset();
    this.subject.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showClasses(){
    this.reset();
    this.class.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showStudents(){
    this.reset();
    this.student.style.display = 'inline';
    this.init.style.display = 'none';
  }
  showGrades(){
    this.reset();
    this.grade.style.display = 'inline';
    this.init.style.display = 'none';
  }
}
