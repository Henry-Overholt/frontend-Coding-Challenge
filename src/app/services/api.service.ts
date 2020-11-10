import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id: string;
  enrolleeToEdit: any;
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
//Rand Miller is the enrollee that is not working, because the ID isn't in the proper format. It's missing the correct hyphens;
