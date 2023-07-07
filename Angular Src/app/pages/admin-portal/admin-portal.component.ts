import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/service/admin.service';
import { SignupService } from 'src/app/service/signup.service';
// interface 

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  flag!:string;
  showFormDetails=true;
  formDetails:any;
  role= localStorage.getItem("role") || '';
    registeredDoctors: any[]; 
 
   

    constructor(private adminservice: AdminService,private http:HttpClient,private signupService:SignupService) {
      
      if (this.role=='Admin')
      {
        this.flag='Admin';
      }
      if (this.role=="Doctor")
      {
        this.flag='Doctor';
      }
 
    
    }
  ngOnInit(): void {
    this.loadRegisteredDoctors();
  }
  loadRegisteredDoctors() {
    this.adminservice.getRegisteredDoctors()
      .subscribe((data: any[]) => {
        this.registeredDoctors = data;
      });
  }
  approveDoctor(doctorId:any) {
    console.log(doctorId);
    this.adminservice.updateApprovalStatus(doctorId.id, doctorId)
      .subscribe(() => {
        // Handle success, such as showing a success message or refreshing the doctor list
        this.loadRegisteredDoctors();
      });
  }
  // rejectDoctor(doctorId: number) {
  //   this.adminservice.updateApprovalStatus(doctorId,)
  //     .subscribe(() => {
  //       // Handle success, such as showing a success message or refreshing the doctor list
  //       this.loadRegisteredDoctors();
  //     });
  // }
  deleteDoctor(doctorId: number) {
    this.adminservice.deleteDoctor(doctorId)
      .subscribe(() => {
        // Handle success, such as showing a success message or refreshing the doctor list
        this.loadRegisteredDoctors();
      });
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
export class doctorModel{
 
    id: number;
     name: string;
     specialization: string;
   
}