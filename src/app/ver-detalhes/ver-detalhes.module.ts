import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDetalhesPageRoutingModule } from './ver-detalhes-routing.module';

import { VerDetalhesPage } from './ver-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDetalhesPageRoutingModule
  ],
  declarations: [VerDetalhesPage]
})
export class VerDetalhesPageModule {}
