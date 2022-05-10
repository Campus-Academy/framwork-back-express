import { Component, OnInit } from '@angular/core';
import {Note} from "../../structures/note";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public note = new Note();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  save(){
    this.noteService.addNote(this.note);
  }

  reset(){
    this.note = this.noteService.resetNote(this.note);
  }

  updateBody(event: any){
    console.log(event);
  }

}
