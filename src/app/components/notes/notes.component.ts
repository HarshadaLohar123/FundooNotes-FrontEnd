import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  noteArray:any;
  
  constructor(private note:NoteService) { }

  ngOnInit(): void {
   this.getAllNotes()
  }
  getAllNotes(){
    this.note.getnote().subscribe((result:any)=>{
      console.log(result.data);
      this.noteArray=result.data
      
      this.noteArray.reverse();
        this.noteArray = this.noteArray.filter((object: any) => {
          return object.isTrash === false && object.isArchive===false
        })

       
    })
  }
  receivedEvent(event:any){
    console.log(event);
    
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  recieveEvent($event:any){
    this.getAllNotes()
  }
  updatedData(value: any) {

    this.getAllNotes();
  }

}
