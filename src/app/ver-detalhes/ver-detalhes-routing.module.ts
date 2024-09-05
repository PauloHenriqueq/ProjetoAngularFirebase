import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDetalhesPage } from './ver-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: VerDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDetalhesPageRoutingModule {}
