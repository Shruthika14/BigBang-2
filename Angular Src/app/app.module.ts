import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupService } from './service/signup.service';
import { HomeComponent } from './pages/home/home.component';
import { PractitionersComponent } from './pages/practitioners/practitioners.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DoctorLandingComponent } from './pages/doctorlandingpage/doctorlandingpage.component';
import { AdminPortalComponent } from './pages/admin-portal/admin-portal.component';
import { UpcomingappointmentComponent } from './pages/doctorlandingpage/DoctorRole/upcomingappointment/upcomingappointment.component';
import { UpcomingappointmentService } from './service/upcomingappointment.service';
import { ApprovalComponent } from './pages/approval/approval.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-service.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PractitionersComponent,
    AppointmentComponent,
    DoctorLandingComponent,
    AdminPortalComponent,
    UpcomingappointmentComponent,
    ApprovalComponent,
    AdminDashboardComponent
 
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignupService,UpcomingappointmentService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
