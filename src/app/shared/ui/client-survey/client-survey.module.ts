import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientSurveyComponent } from './client-survey.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ClientSurveyComponent],
  exports: [ClientSurveyComponent],
})
export class ClientSurveyModule {}
