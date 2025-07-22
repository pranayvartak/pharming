import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { PostsService } from '../posts.service';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  users:any[]=[]
  constructor(private router:Router,private dataService:DataService){
    if(localStorage.getItem('username') ){
      this.router.navigateByUrl('/dashboard')
    
    }
  }
  a= true;
  signin(){
    alert("Signing in")
  }
  signup(){
    alert("Signing Up")
  }
}
