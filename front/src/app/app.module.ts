import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { MateriasComponent } from './materias/materias.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NotasComponent } from './notas/notas.component';
import { ProfessoresService } from './professores.service';
import { MateriasService } from './materias.service';
import { TurmasService } from './turmas.service';
import { AlunosService } from './alunos.service';
import { NotasService } from './notas.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    MateriasComponent,
    TurmasComponent,
    AlunosComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfessoresService, MateriasService, TurmasService, AlunosService, NotasService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
