import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientSurveyPageRoutingModule } from './client-survey-routing.module';

import { ClientSurveyPage } from './client-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientSurveyPageRoutingModule
  ],
  declarations: [ClientSurveyPage]
})
export class ClientSurveyPageModule {}
