import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantePageRoutingModule } from './estudiante-routing.module';

import { EstudiantePage } from './estudiante.page';

import { CamaraService } from '../service/camara.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantePageRoutingModule
  ],
  declarations: [EstudiantePage],
  providers: [CamaraService]
})
export class EstudiantePageModule {}
