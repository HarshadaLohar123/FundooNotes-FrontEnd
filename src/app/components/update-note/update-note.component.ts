import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  @Output() noteUpdated = new EventEmitter<any>();

  title:any;
  description:any;
  noteId:any;
  color:any;
  noteArray:any;

  constructor(private note:NoteService,private snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.title = data.title
    this.description = data.description
     this.noteId = data.noteID
    
    }
    
  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description;
    this.color=this.data.color;
    
    // console.log(this.noteId);    
  }
  onNoClick(): void {
    let data={
      Title: this.title,
      Description: this.description,
      // colour:this.color
      "color":"string",
      
    }
    // console.log();
    
    console.log("data print",data);
    this.note.updateNote(data,this.noteId).subscribe((result:any)=>{
      console.log(result);
      this.noteUpdated.emit(result)

      this.snackBar.open('Note Updated Successfully..!!!', '..', {
        duration: 3000,
      })
      
    })
    
    this.dialogRef.close();
  }

}
