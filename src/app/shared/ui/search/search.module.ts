import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
