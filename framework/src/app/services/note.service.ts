import {Injectable} from '@angular/core';
import {Note} from '../structures/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  public _notes: Map<String, Note>;

  public REST_API: string = 'http://localhost:2022/notes';

  constructor(private http: HttpClient) {
    this._notes = new Map<String, Note>();
    //getLocaStorageNotes
    this.http.get<any>(this.REST_API).subscribe(datas => {
      datas.forEach(data => {
        const note = data as Note;
        this.updateFromBackend(note);
      });
    })
    
    // for(let i = 0; i < localStorage.length; i++){
    //   const key = localStorage.key(i);
    //   const note = JSON.parse(localStorage.getItem(key)) as Note;
    //   console.log('Notes ',note)
    //   this.updateFromStorage(note);
    // }
  }

  public updateFromBackend(note: Note){
    const newNote = new Note();
    newNote.setNote(note);
    const existNote = this._notes.get(newNote.titre);
    if(!existNote){
      this._notes.set(newNote.titre, newNote);
    }
  }

  public addNote(note: Note):void {
    const existNote = this._notes.get(note.titre);
    if(existNote){
      existNote.createDate = note.createDate; // date de modification
      existNote.status = "waiting";
      existNote.body = note.body;
      existNote.document = note.document;
      // localStorage.setItem(existNote.titre.toString(), JSON.stringify(existNote))
      this.http.post<any>(this.REST_API, existNote).subscribe(data => {
        const newNote = new Note();
        newNote.setNote(data);
        this._notes.set(note.titre, newNote);
      })

    } else{
      if(!note.createDate){
        note.createDate = new Date();
      }
      note.status = "waiting";
      // localStorage.setItem(note.titre.toString(), JSON.stringify(note))
      this.http.post<any>(this.REST_API, note).subscribe(data => {
        const newNote = new Note();
        newNote.setNote(data);
        this._notes.set(note.titre, newNote);
      })

    }
  }

  public resetNote(note: Note): Note{
    const existNote = this._notes.get(note.titre);
    console.log("To reset", existNote)
    if(existNote) {
      this._notes.delete(note.titre);
      // localStorage.removeItem(note.titre.toString());
      this.http.delete<any>(this.REST_API+"/"+ existNote.id.toString()).subscribe(data => {
        console.log(data)
      })
      
    }
    note.titre = "";
    note.status = ""
    note.body = ""
    note.document = ""

    return note;
  }

  public getNote(titre: String):Note{
    return  this._notes.get(titre);
  }

  public setStatus(note: Note, status: string){
    const existNote = this._notes.get(note.titre);
    if(existNote) {
      existNote.status= status;
      this._notes.set(existNote.titre, existNote);
      // localStorage.setItem(existNote.titre.toString(), JSON.stringify(existNote))
      this.http.put<any>(this.REST_API + "/"+ note.id.toString(), existNote).subscribe(data => {
        console.log(data)
      })
    }
  }

}
