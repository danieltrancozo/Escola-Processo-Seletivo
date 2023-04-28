import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GradesModel } from './grades/grades.model';
import { identity, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private httpClient: HttpClient) { }

  CreateGrade(grade: GradesModel): Observable<any>{
    return this.httpClient.post(environment.gradesURL, grade);
  }
  ListGrades(): Observable<any>{
    return this.httpClient.get(environment.gradesURL);
  }
  GradeUpdate(id: Number, a: Number, g: Number): Observable<any>{
    return this.httpClient.put(environment.gradesURL+'/'+id+'/'+a+'/'+g,null)
  }
  GradeFinals(id: Number, final: Number): Observable<any>{
    return this.httpClient.put(environment.gradesURL+'/'+id+'/'+final,null)
  }
  DeleteGrade(id: Number): Observable<any>{
    return this.httpClient.delete(environment.gradesURL+'/'+id)
  }
}
