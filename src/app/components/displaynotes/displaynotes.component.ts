import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg:any;

  @Input() childMessage:any;
@Output() displaytogetallnotes=new EventEmitter<string>();
@Output() noteUpdated = new EventEmitter<any>();
  constructor(public dialog:MatDialog) { }


  ngOnInit(): void {
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '380px',
      data:note,
      panelClass:'my-custom-dialog-class'
      
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(result);
    });
  }
  operation(value: any) {
    this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }

}
