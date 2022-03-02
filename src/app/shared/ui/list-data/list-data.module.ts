import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListDataComponent } from './list-data.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ListDataComponent],
  exports: [ListDataComponent],
})
export class ListDataModule {}
