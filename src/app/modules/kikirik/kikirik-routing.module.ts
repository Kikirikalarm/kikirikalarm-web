import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KikirikComponent } from './components/kikirik/kikirik.component';
import { AlarmasComponent } from './pages/alarmas/alarmas.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { AsistenteVirtualComponent } from './pages/asistente-virtual/asistente-virtual.component';
import { ServicioAudioComponent } from './pages/servicio-audio/servicio-audio.component';

const routes: Routes = [
  {
    path: '',
    component: KikirikComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'alarmas',
      },
      { path: 'alarmas', component: AlarmasComponent },
      { path: 'perfil-usuario', component: PerfilUsuarioComponent },
      { path: 'marcadores', component: MarcadoresComponent },
      { path: 'asistentes-virtuales', component: AsistenteVirtualComponent },
      { path: 'servicios-audio', component: ServicioAudioComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KikirikRoutingModule { }
