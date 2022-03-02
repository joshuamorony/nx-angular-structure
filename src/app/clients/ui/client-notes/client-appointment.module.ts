import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientNotesComponent } from './client-notes.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ClientNotesComponent],
  exports: [ClientNotesComponent],
})
export class ClientNotesModule {}
