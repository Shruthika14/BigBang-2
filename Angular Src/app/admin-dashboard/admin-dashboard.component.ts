import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  flag!:string;
  showFormDetails=true;
  formDetails:any;
  role= localStorage.getItem("role") || '';

  constructor(private http:HttpClient,private signupService:SignupService){
    if (this.role=='Admin')
    {
      this.flag='Admin';
    }
    if (this.role=="Doctor")
    {
      this.flag='Doctor';
    }
  }

  approveForm() {
   
    this.http.post<any>('https://localhost:7109/api/User/Register', this.formDetails)
      .subscribe(response => {
        console.log(response);

        this.signupService.setFormDetails(null);
        this.showFormDetails = false;
      }, error => {
        console.error(error);
      });
  }
   declineForm() {
    this.signupService.setFormDetails(null);
    this.showFormDetails = false;
  }
  
}
