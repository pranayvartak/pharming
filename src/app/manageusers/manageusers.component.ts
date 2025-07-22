import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrl: './manageusers.component.css'
})
export class ManageusersComponent {
users:any[]=[]
user:any={}
constructor(private DataService:DataService){
  this.refresh()
}

refresh(){
    this.DataService.users().subscribe(temp=> this.users =temp)
}
deleteUser(id:any){
  this.DataService.deleteUser(id).subscribe(x=> {alert("User Deleted");
    this.refresh()
  })
}
updateUser(){
  this.DataService.updateUser(this.user._id,this.user).subscribe(x=> {
    if(x=='failed'){
      alert("Username Already Exists")
    }
    else
    {alert("User Updated");
    this.refresh()
    this.user={}}
  })
}
edit(id:any){
  let user = this.users.find(x=> x._id == id)
  this.user = {...user}
  
}
}
