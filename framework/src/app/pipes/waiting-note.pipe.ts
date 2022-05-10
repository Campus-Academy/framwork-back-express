import {Pipe, PipeTransform} from '@angular/core';
import {Note} from "../structures/note";

@Pipe({
  name: 'waitingNote',
  pure: false
})
export class WaitingNotePipe implements PipeTransform {

  transform(items: Map<String, Note>, filter: string): Map<String, Note> {
    if (!items || !filter) {
      return items;
    }
    const newMap = new Map<String, Note>();
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    items.forEach((note, key) => {
      if(note.status === filter){
        newMap.set(note.titre, note);
      }
    });

    return newMap;
  }

}
