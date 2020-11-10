import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id: string;
  enrolleeToEdit: any;
  randMillerId: string = '89a0cd05-25fb-4b6e-a8f8-fc2187f690d0';
  landMillerId: string = 'fe1636a3-4d23-4068-ba56-551fae06e29c';
  constructor(private http: HttpClient) {}
  getAllEnrollees(): Observable<any> {
    return this.http.get('http://localhost:8080/enrollees');
  }
  getEnrolleesById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/enrollees/${id}`);
  }
  putEnrollees(id: string, newInfo: any): Observable<any> {
    return this.http.put(`http://localhost:8080/enrollees/${id}`, newInfo);
  }
  setId(id): void {
    this.id = id;
  }
  setEnrolleeToEdit(enrollee): void {
    this.enrolleeToEdit = enrollee;
  }
  getId(): string {
    return this.id;
  }
  getEnrolleeToEdit(): any {
    return this.enrolleeToEdit;
  }
}
//Rand Miller is the enrollee that is not working, because the ID isn't in the proper format. It's missing hyphens;
//I can't fix it from here.
