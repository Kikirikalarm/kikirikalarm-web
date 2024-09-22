import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-audio',
  templateUrl: './servicio-audio.component.html',
  styleUrls: ['./servicio-audio.component.scss'],
})
export class ServicioAudioComponent {

  constructor() { }

  confServicioAudio(url: string) {
    // window.location.href = url;
    window.open(url, '_blank');
  }

}
