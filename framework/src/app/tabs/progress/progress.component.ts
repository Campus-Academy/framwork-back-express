import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../structures/note";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

  setStatus(note: Note, status: string){
    this.noteService.setStatus(note, status);
  }
}
