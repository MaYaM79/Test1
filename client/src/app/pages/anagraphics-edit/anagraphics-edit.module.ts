import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagraphicsEditComponent } from './anagraphics-edit.component';
import { AnagraphicsEditRoutingModule } from './anagraphics-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AnagraphicsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AnagraphicsEditComponent
  ]
})
export class AnagraphicsEditModule { }
