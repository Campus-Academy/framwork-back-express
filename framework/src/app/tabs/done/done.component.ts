import { Component, OnInit } from '@angular/core';
import {Note} from "../../structures/note";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  constructor(public noteService: NoteService ) { }

  ngOnInit(): void {
  }

  setStatus(note: Note, status: string){
    this.noteService.setStatus(note, status);
  }
}
