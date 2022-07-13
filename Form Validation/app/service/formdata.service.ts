import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  url = "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }
 
  getcall(){
    return this.http.get(this.url)
  }
  adduser(data: any){
    // console.log("data",data);
    return this.http.post(this.url,data);

  }
}
