import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {DetailComponent} from "./detail/detail.component";
import {NoteListComponent} from "./note-list/note-list.component";


const routes: Routes = [
  { path: 'app',
    component: NoteListComponent
  },
  { path: 'detail',
    component: DetailComponent
  },
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component:  AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
