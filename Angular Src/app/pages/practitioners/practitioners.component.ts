import { Component } from '@angular/core';

@Component({
  selector: 'app-practitioners',
  templateUrl: './practitioners.component.html',
  styleUrls: ['./practitioners.component.css']
})
export class PractitionersComponent {

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

