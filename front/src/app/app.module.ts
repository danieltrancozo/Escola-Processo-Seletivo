import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { GradesComponent } from './grades/grades.component';
import { TeachersService } from './teachers.service';
import { SubjectsService } from './subjects.service';
import { ClassesService } from './classes.service';
import { StudentsService } from './students.service';
import { GradesService } from './grades.service';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    SubjectsComponent,
    ClassesComponent,
    StudentsComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ],
  providers: [TeachersService, SubjectsService, ClassesService, StudentsService, GradesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
