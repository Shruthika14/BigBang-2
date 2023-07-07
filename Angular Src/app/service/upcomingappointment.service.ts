import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingappointmentService {
  private apiUrl = 'https://localhost:7109/api/Patients';
  constructor(private http: HttpClient) { }

  getUpcomingappointments() {
    return this.http.get(this.apiUrl);
  }

  getUpcomingappointment(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUpcomingappointment(id: number, appointment: any) {
    return this.http.put(`${this.apiUrl}/${id}`, appointment);
  }

  deleteUpcomingppointment(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateAppointment(appointmentId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${appointmentId}`;
    return this.http.put(url, updatedData);
  }
}

