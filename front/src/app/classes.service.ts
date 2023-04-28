import { studentModel } from './students/students.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from '../environments/environment';
import { classesModel } from './classes/classes.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(private httpClient: HttpClient) { }
  ListClasses(): Observable<any>{
    return this.httpClient.get(environment.classesUrl);
  }
  CreateClass(cl: classesModel): Observable<any>{
    return this.httpClient.post(environment.classesUrl, cl);
  }
  DeactivateClass(id: Number, at: boolean): Observable<any>{
    return this.httpClient.put(environment.classesUrl+'/'+id+'/'+at, null);
  }
  ShowClass(): Observable<any>{
    return this.httpClient.get(environment.studentsURL);
  }
  UpdateClass(id: Number, ct: Number): Observable<any>{
    return this.httpClient.put(environment.classesUrl+'/update/'+id+'/'+ct, null);
  }
  DeleteClass(id: Number): Observable<any>{
    return this.httpClient.delete(environment.classesUrl+'/'+id);
  }
  InputStudent(student: studentModel): Observable<any>{
    return this.httpClient.post(environment.studentsURL, student);
  }
}
