import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl=environment.baseUrl;

  constructor( private httpservice:HttpService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
      
    }
    return this.httpservice.postService(this.BaseUrl+'User/Register',data,false,header)
  }


  login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpservice.postService(this.BaseUrl+`User/login/${data.email}/${data.password}`,{},false,header)
  }

  forgot(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService(this.BaseUrl+`User/ForgotPassword/${data.email}`,data,true,header)
  }


  resetPassword(data:any, token:any){
    console.log(data)

    let header={
      Headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +token
      })

    }
    return this.httpservice.putService(this.BaseUrl+`User/ChangePassword`,data, true, header)

}
 
}
