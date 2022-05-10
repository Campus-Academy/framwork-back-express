import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from "rxjs/operators";
import {NoteService} from "../services/note.service";
import {Note} from "../structures/note";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  noteName = "";
  note : Note;
  edit = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteName = this.route.snapshot.paramMap.get('name');
    this.note = this.noteService.getNote(this.noteName);
  }

  editNote(): void{
    this.edit = !this.edit;
  }

  saveNote():void {
    this.noteService.addNote(this.note);
  }

}
