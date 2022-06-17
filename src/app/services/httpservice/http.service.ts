import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  
  postService(url:string, data:any, token:boolean=false, httpOption:any){
    return this.http.post(url, data, token && httpOption)
  }
  putService(url:string, reqdata:any, token:boolean=false, httpOption: any){
    return this.http.put(url, reqdata, token && httpOption)
  }

  getService(url:string, token:boolean=false, httpOption:any){
    return this.http.get(url,token && httpOption)
  }

  deleteService(url:string, token:boolean=false, httpOption:any){
    return this.http.delete(url,token && httpOption )
  }}
