export class Note {

  private _titre: String;
  private _body: String;
  private _createDate: Date;
  private _document: Object;
  private _status: String;
  private _id: String;

  constructor(titre = "", body = "", createDate = new Date(), document = "", status = "", _id ="") {
    this._titre = titre;
    this._body = body;
    this._createDate = createDate;
    this._document = document;
    this._status = status;
    this._id = _id;
  }

  public setNote(note : Note){
    this._titre = note.titre;
    this._body = note.body;
    this._createDate = note.createDate;
    this._document = note.document;
    this._status = note.status;
    this._id = note._id;

  }
  set titre(value: String) {
    this._titre = value;
  }

  set id(value: String) {
    this._id = value;
  }

  set body(value: String) {
    this._body = value;
  }

  set createDate(value: Date) {
    this._createDate = value;
  }

  set document(value: Object) {
    this._document = value;
  }

  set status(value: String) {
    this._status = value;
  }

  get titre(): String {
    return this._titre;
  }

  get id(): String {
    return this._id;
  }

  get body(): String {
    return this._body;
  }

  get createDate(): Date {
    return this._createDate;
  }

  get document(): Object {
    return this._document;
  }

  get status(): String {
    return this._status;
  }


  toString(): string{
    let str = '{';
    if(this._titre){
      str += `"titre" : "${this._titre}",`;
    }
    if(this._status){
      str += `"status" : "${this._status}",`;
    }
    if(this._createDate){
      str += `"createDate" : "${this._createDate.toISOString()}",`;
    }
    if(this._body){
      str += `"body" : "${this._body}"`;
    }
    str += '}';

    return str;
  }

}
