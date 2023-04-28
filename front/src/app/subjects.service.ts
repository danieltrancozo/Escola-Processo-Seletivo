import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from '../environments/environment';
import { SubjectsModel } from './subjects/subjects.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpClient: HttpClient) { }

  CreateSubject(subject: SubjectsModel): Observable<any>{
    return this.httpClient.post(environment.subjectsURL,subject)
  }
  ListSubjects(): Observable<any>{
    return this.httpClient.get(environment.subjectsURL)
  }
  UpdateSubject(id: Number, i: Number, w: Number): Observable<any>{
    return this.httpClient.put(environment.subjectsURL+'/'+id+'/'+i+'/'+w,null)
  }
  DeleteSubject(id: Number): Observable<any>{
    return this.httpClient.delete(environment.subjectsURL+'/'+id)
  }
}
