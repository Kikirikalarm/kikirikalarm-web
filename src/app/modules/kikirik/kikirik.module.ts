import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KikirikRoutingModule } from './kikirik-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { KikirikComponent } from './components/kikirik/kikirik.component';
import { IonicModule } from '@ionic/angular';
import { SeleccionHoraDialogComponent } from './components/seleccion-hora-dialog/seleccion-hora-dialog.component';
import { AlarmasComponent } from './pages/alarmas/alarmas.component';
import { AsistenteVirtualComponent } from './pages/asistente-virtual/asistente-virtual.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ServicioAudioComponent } from './pages/servicio-audio/servicio-audio.component';

@NgModule({
  declarations: [
    KikirikComponent,
    SeleccionHoraDialogComponent,
    AlarmasComponent,
    AsistenteVirtualComponent,
    MarcadoresComponent,
    PerfilUsuarioComponent,
    ServicioAudioComponent
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
