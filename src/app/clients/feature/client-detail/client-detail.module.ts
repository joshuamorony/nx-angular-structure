import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientDetailPageRoutingModule } from './client-detail-routing.module';

import { ClientDetailPage } from './client-detail.page';
import { ClientInfoModule } from '../../ui/client-info/client-appointment.module';
import { ClientAppointmentModule } from '../../ui/client-appointment/client-appointment.module';
import { ClientNotesModule } from '../../ui/client-notes/client-appointment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDetailPageRoutingModule,
    ClientInfoModule,
    ClientAppointmentModule,
    ClientNotesModule,
  ],
  declarations: [ClientDetailPage],
})
export class ClientDetailPageModule {}
