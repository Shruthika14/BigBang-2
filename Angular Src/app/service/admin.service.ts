import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { doctorModel } from '../pages/admin-portal/admin-portal.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7109/api/Doctors'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getRegisteredDoctors(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7109/api/Doctors`);
  }

  updateApprovalStatus(doctorId: number, detail:doctorModel): Observable<any> {
    
    return this.http.post<any[]>(`https://localhost:7109/api/Doctors/${doctorId}`, detail);
  }

  deleteDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/doctors/${doctorId}`);
  }
}
