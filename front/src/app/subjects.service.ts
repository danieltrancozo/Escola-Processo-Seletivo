import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpClient: HttpClient) { }
}
