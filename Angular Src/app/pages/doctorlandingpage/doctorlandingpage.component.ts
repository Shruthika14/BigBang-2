import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-DoctorLandingPage',
  templateUrl: './DoctorLandingPage.component.html',
  styleUrls: ['./DoctorLandingPage.component.css']
})
export class DoctorLandingComponent implements OnInit {
  doctors: any[]; // Array to store doctor details
  selectedDoctor: any; // Variable to hold the selected doctor
  apiUrl = 'https://localhost:7109/api/Doctors'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDoctors(); // Fetch doctors on component initialization
  }

  // Fetch all doctors
  getDoctors() {
    this.http.get<any[]>(`${this.apiUrl}/doctors`).subscribe((data) => {
      this.doctors = data;
    });
  }

  // Add a new doctor
  addDoctor(doctor: any) {
    this.http.post<any>(`${this.apiUrl}/doctors`, doctor).subscribe(() => {
      this.getDoctors(); // Refresh the doctors list
    });
  }

  // Update an existing doctor
  updateDoctor(doctor: any) {
    this.http.put<any>(`${this.apiUrl}/doctors/${doctor.id}`, doctor).subscribe(() => {
      this.getDoctors(); // Refresh the doctors list
    });
  }

  // Delete a doctor
  deleteDoctor(id: number) {
    this.http.delete<any>(`${this.apiUrl}/doctors/${id}`).subscribe(() => {
      this.getDoctors(); // Refresh the doctors list
    });
  }

  // Select a doctor
  selectDoctor(doctor: any) {
    this.selectedDoctor = { ...doctor }; // Create a copy of the selected doctor object
  }

  // Clear the selected doctor
  clearSelection() {
    this.selectedDoctor = null;
  }
}
