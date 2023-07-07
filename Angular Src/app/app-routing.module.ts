import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PractitionersComponent } from './pages/practitioners/practitioners.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AdminPortalComponent } from './pages/admin-portal/admin-portal.component';
import { DoctorLandingComponent } from './pages/doctorlandingpage/doctorlandingpage.component';
import { UpcomingappointmentComponent } from './pages/doctorlandingpage/DoctorRole/upcomingappointment/upcomingappointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'practitioner',component:PractitionersComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'admin-portal',component:AdminPortalComponent},
  {path:'doctorlandingpage',component:DoctorLandingComponent},
  {path:'upcomingappointment',component:UpcomingappointmentComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
