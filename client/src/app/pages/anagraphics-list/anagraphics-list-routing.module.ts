import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraphicsListComponent } from './anagraphics-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnagraphicsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraphicsListRoutingModule { }
