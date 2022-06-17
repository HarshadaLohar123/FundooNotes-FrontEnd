import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  BaseUrl=environment.baseUrl;
  token:any;
  noteId:any;


  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  addnote(data:any){
    console.log(this.token);
    
     let header = {
    headers:new HttpHeaders
    ({
      'Content-type':'application/json',
      'Authorization': 'Bearer ' +this.token
    })
  }
   return this.http.postService(this.BaseUrl+'Note/AddNote',data,true,header)
  }

  getnote(){
    console.log(this.token);
    
     let header = {
    headers:new HttpHeaders
    ({
      'Content-type':'application/json',
      'Authorization': 'Bearer ' +this.token
    })
  }
   return this.http.getService(this.BaseUrl+'Note/GetAllNotes',true,header)
}

trashNote(data: any) {
  console.log(data);
  

  let header = {
    headers: new HttpHeaders({
      
      'Content-type': 'application/json',
      'Authorization' : 'Bearer '+ this.token,

    }),
  };
  return this.http.putService(this.BaseUrl+ `Note/Trash/${data.noteId}`, data, true,header );
}

archiveNote(data: any) {
  console.log(data);
  

  let header = {
    headers: new HttpHeaders({
      
      'Content-type': 'application/json',
      'Authorization' : 'Bearer '+ this.token,

    }),
  };
  return this.http.putService(this.BaseUrl+ `Note/ArchiveNote/${data.noteId}`, data, true,header );
}

updateNote(data:any,noteId:any) {
  // console.log(data);
  console.log(this.token);
  console.log(this.noteId)

  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.http.putService(this.BaseUrl+`Note/Update/${noteId}`,data, true, header)
}


ChangeColor(noteId:any,color:any) {
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.http.putService(this.BaseUrl +`Note/ChangeColour/${noteId}/${color}`,{}, true, header)
}

deleteNotePermanent(reqdata: any) {
  console.log(reqdata);

  let header = {
    headers: new HttpHeaders({
      
      'Content-type': 'application/json',
      'Authorization' : 'Bearer '+ this.token,

    }),
  };
  return this.http.deleteService(this.BaseUrl + `Note/Delete/${reqdata.noteId}`, true,header );
}

deleteNote(reqdata: any) {
  console.log(reqdata);
  

  let header = {
    headers: new HttpHeaders({
      
      'Content-type': 'application/json',
      'Authorization' : 'Bearer '+ this.token,

    }),
  };
  return this.http.putService(this.BaseUrl + `Note/Trash/${reqdata.noteId}`, reqdata, true,header );
}



 }
