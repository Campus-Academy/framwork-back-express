import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../structures/note";

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WaitingComponent implements OnInit {

  constructor(public noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  setStatus(note: Note, status: string){
    this.noteService.setStatus(note, status);
  }

  detail(note: Note){
    console.log("click");
  }
}
