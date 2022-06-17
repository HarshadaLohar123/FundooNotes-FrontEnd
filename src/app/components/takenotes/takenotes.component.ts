import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-takenotes',
  templateUrl: './takenotes.component.html',
  styleUrls: ['./takenotes.component.scss']
})
export class TakenotesComponent implements OnInit {
isShow=false;
title:any;
description:any;


  constructor(private note:NoteService,private snackBar:MatSnackBar) { }

 
  @Output() createtodisplay = new EventEmitter<string>();


  ngOnInit(): void {
  }
  show(){
    this.isShow=true;
  }
  close(){
    this.isShow=false;
    console.log(this.title,this.description);
    
    if((this.title==null || this.title == "")&& (this.description == null || this.description == "")){
      console.log("values are null");
    }
    else{
      let data={
        title:this.title,
        description:this.description,
      }
   this.note.addnote(data).subscribe((res:any)=>{
     console.log(res);
     this.title=""
     this.description=""
     this.createtodisplay.emit(res)

     
   }) 
   this.snackBar.open('Note Created Successfully..!!!','..', {
    duration: 3000,
  })
  }
  



}}
