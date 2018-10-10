import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraphicsEditComponent } from './anagraphics-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AnagraphicsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraphicsEditRoutingModule { }
