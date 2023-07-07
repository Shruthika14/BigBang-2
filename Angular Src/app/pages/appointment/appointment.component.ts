import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  flag!:string;

  role= localStorage.getItem("role") || '';
  
  appointmentForm: FormGroup;
  isAppointmentBooked = false;
  isDoctorAvailable = true;
  apiUrl = 'https://localhost:7109/api/Patients'; 

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    if (this.role=='Admin')
    {
      this.flag='Admin';
    }
    if (this.role=="Doctor")
    {
      this.flag='Doctor';
    }
  
  

    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      preferredDoctor: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required]
    });
  }
  
  

  onSubmit() {
    alert("booked")
    if (this.appointmentForm.invalid) {
      return;
    }

    const appointmentData = this.appointmentForm.value;

    this.http.post(`${this.apiUrl}`, appointmentData).subscribe(() => {
      
      this.isAppointmentBooked = true;
      this.appointmentForm.reset();
    });
  }

  checkDoctorAvailability() {
    const selectedDate = this.appointmentForm.get('appointmentDate').value;
    const preferredDoctor = this.appointmentForm.get('doctorName').value;
    
    const dateObj = new Date(selectedDate);
    const dayOfWeek = dateObj.getDay();
  
    // Check if the selected day is a weekend day (Saturday or Sunday)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      this.isDoctorAvailable = false;
    } else {
      // Placeholder logic - assuming doctor is available for all other days
      this.isDoctorAvailable = true;
    }
    this.isAppointmentBooked = true;
  }

  
}

