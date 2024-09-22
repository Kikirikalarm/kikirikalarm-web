import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistente-virtual',
  templateUrl: './asistente-virtual.component.html',
  styleUrls: ['./asistente-virtual.component.scss'],
})
export class AsistenteVirtualComponent {

  constructor(private router: Router) { }

  confAsistente(url: string) {
    // window.location.href = url;
    window.open(url, '_blank');
  }

}
