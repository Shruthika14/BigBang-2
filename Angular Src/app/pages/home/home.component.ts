import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  flag!:string;

  role= localStorage.getItem("role") || '';

  constructor(){
    if (this.role=='Admin')
    {
      this.flag='Admin';
    }
    if (this.role=="Doctor")
    {
      this.flag='Doctor';
    }
  }
}