import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 loggedinuser:any

 constructor(private router:Router){
  this.loggedinuser = localStorage.getItem('username')
 }
 
}

