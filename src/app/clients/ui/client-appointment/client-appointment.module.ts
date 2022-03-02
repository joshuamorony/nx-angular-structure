import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientAppointmentComponent } from './client-appointment.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ClientAppointmentComponent],
  exports: [ClientAppointmentComponent],
})
export class ClientAppointmentModule {}
