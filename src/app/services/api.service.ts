import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllEnrollees(): Observable<any> {
    return this.http.get('http://localhost:8080/enrollees');
  }
}
