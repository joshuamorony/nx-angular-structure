import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientInfoComponent } from './client-info.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ClientInfoComponent],
  exports: [ClientInfoComponent],
})
export class ClientInfoModule {}
