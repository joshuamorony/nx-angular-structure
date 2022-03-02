import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NoteComponent } from './note.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [NoteComponent],
  exports: [NoteComponent],
})
export class NoteModule {}
