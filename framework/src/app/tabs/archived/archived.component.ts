import { Component, OnInit } from '@angular/core';
import {Note} from "../../structures/note";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {

  constructor( public noteService: NoteService ) { }

  ngOnInit(): void {
  }

  setStatus(note: Note, status: string){
    this.noteService.setStatus(note, status);
  }
}
