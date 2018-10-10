import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagraphicsListComponent } from './anagraphics-list.component';
import { AnagraphicsListRoutingModule } from './anagraphics-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AnagraphicsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AnagraphicsListComponent
  ]
})
export class AnagraphicsListModule { }
