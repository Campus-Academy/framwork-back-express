import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {DoneComponent} from './tabs/done/done.component';
import {ProgressComponent} from './tabs/progress/progress.component';
import {WaitingComponent} from './tabs/waiting/waiting.component';
import {ArchivedComponent} from './tabs/archived/archived.component';
import {AddComponent} from './tabs/add/add.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import { WaitingNotePipe } from './pipes/waiting-note.pipe';
import { DetailComponent } from './detail/detail.component';
import { NoteListComponent } from './note-list/note-list.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    ProgressComponent,
    WaitingComponent,
    ArchivedComponent,
    AddComponent,
    WaitingNotePipe,
    DetailComponent,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
