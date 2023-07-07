import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UpcomingappointmentService } from 'src/app/service/upcomingappointment.service';

declare var $: any; // Import jQuery
// Add this at the top of the file, before the component decorator
interface Appointment {
  name: string;
  email: string;
  phoneNumber: string;
  preferredDoctor: string;
  appointmentDate: string;
  appointmentTime: string;
}


@Component({
  selector: 'app-upcomingappointment',
  templateUrl: './upcomingappointment.component.html',
  styleUrls: ['./upcomingappointment.component.css']
})
export class UpcomingappointmentComponent implements OnInit {

  
  flag!:string;

  role= localStorage.getItem("role") || '';

  



  upcomingappointments: any;
  selectedAppointment: Appointment; // Declare a variable to store the selected appointment for date change
  newDate: string;
  private apiUrl = `https://localhost:7109/api/Patients/`; 
  constructor(private appointmentService: UpcomingappointmentService, private elementRef: ElementRef,private http:HttpClient) {
    if (this.role=='Admin')
    {
      this.flag='Admin';
    }
    if (this.role=="Doctor")
    {
      this.flag='Doctor';
    }
  
  }

  ngOnInit() {
    this.loadUpcomingappointments();
  }

  loadUpcomingappointments(): void {
    this.appointmentService.getUpcomingappointments()
      .subscribe((data: any[]) => {
        this.upcomingappointments = data;
        console.log(this.upcomingappointments);
      });
  }

  openChangeDateModal(appointment: Appointment): void {
    this.selectedAppointment = appointment;
    this.newDate = appointment.appointmentDate; // Set initial value to the current appointment date
    const modalElement = this.elementRef.nativeElement.querySelector('#changeDateModal');
    $(modalElement).modal('show'); // Show the modal dialog using jQuery
  }

  submitNewDate(): void {
    // Make API request to update the appointment date
    // Use this.selectedAppointment and this.newDate to send the updated data
    // Handle the API response accordingly
    const modalElement = this.elementRef.nativeElement.querySelector('#changeDateModal');
    $(modalElement).modal('hide'); // Hide the modal dialog using jQuery
  }

}
