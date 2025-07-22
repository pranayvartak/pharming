import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "https://jsonplaceholder.typicode.com/todos" 
  constructor(private http:HttpClient){}

  getData():Observable<any>{
    return this.http.get(this.url)
  }
  postData(data:any):Observable<any>{
    return this.http.post(this.url,data)
  }
  putData(id:any,data:any):Observable<any>{
    return this.http.put(this.url+'/'+id,data)
  }
  patchData(id:any,data:any):Observable<any>{
    return this.http.patch(this.url+'/'+id,data)
  }

  deleteData(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id)
  }

}
