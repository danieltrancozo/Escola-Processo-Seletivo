import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from '../environments/environment';
import { studentModel } from './students/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  InputStudent(student: studentModel): Observable<any>{
    return this.httpClient.post(environment.studentsURL, student);
  }
  lsStudents(): Observable<any> {
    return this.httpClient.get(environment.studentsURL);
  }
  UpdateStudent(id: Number, no: string, tu: Number): Observable<any>{
    return this.httpClient.put(environment.studentsURL+'/update/'+id+'/'+no+'/'+tu,null);
  }
  DeactivateStudent(id: Number, at: boolean, t: Number): Observable<any>{
    return this.httpClient.put(environment.studentsURL+'/'+id+','+at+','+t, null);
  }
  DeleteStudent(id: Number): Observable<any>{
    return this.httpClient.delete(environment.studentsURL+'/'+id);
  }
}
