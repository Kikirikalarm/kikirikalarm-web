import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KikirikRoutingModule } from './kikirik-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { KikirikComponent } from './components/kikirik/kikirik.component';
import { IonicModule } from '@ionic/angular';
import { SeleccionHoraDialogComponent } from './components/seleccion-hora-dialog/seleccion-hora-dialog.component';

@NgModule({
  declarations: [
    KikirikComponent,
    SeleccionHoraDialogComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    KikirikRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class KikirikModule { }
