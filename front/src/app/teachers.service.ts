import { TeachersModel } from './teachers/teachers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from '../environments/environment';


@Injectable({providedIn: 'root'})
export class TeachersService {
  constructor(private httpClient: HttpClient) { }
  ListTeachers(): Observable<any>{
    return this.httpClient.get(environment.teachersUrl);
  }
  CreateTeacher(Prof: TeachersModel): Observable<any>{
    return this.httpClient.post(environment.teachersUrl, Prof);
  }
  UpdateTeacher(id: Number, name :string): Observable<any>{
    return this.httpClient.put(environment.teachersUrl+'/'+id+'/'+name,null);
  }
  DeactivateTeacher(id: Number, at: Boolean): Observable<any>{
    return this.httpClient.put(environment.teachersUrl+'/'+id+','+at,null);
  }
  DeleteTeacher(id: Number): Observable<any>{
    return this.httpClient.delete(environment.teachersUrl+'/'+id);
  }
}
