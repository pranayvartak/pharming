import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
user:any={}

constructor(private auth:DataService, private router:Router){}
signin(){
    this.auth.login(this.user).subscribe(temp=> {
      if(temp=="ok"){
        this.router.navigateByUrl('/dashboard')
        localStorage.setItem('username',this.user.username)
      }
      else {
        alert("login failed");

      }
      this.user={}
    })
  }

}
