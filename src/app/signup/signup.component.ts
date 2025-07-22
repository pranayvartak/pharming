import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user:any={}
  constructor(private auth:DataService){}
  signup(){
    this.auth.signup(this.user).subscribe(temp=>{ alert("User Created");
      this.user = {}
    })
  }

}
