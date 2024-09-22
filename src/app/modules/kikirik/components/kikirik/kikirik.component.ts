import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-kikirik',
  templateUrl: './kikirik.component.html',
  styleUrls: ['./kikirik.component.scss'],
})
export class KikirikComponent {
  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  nombreUsuario: string = sessionStorage.getItem('user-name') || '';

  constructor(
    private LoginService: LoginService,
    private router: Router
  ) { }

  openConfig() {
    this.router.navigate(['kikirik/perfil-usuario']);
    setTimeout(() => {
      this.drawer.open();
    }, 100);
  }

  logout() {
    this.LoginService.logout();
    this.router.navigate(['/login']);
  }

  volver() {
    this.drawer.close();
    setTimeout(() => {
      this.router.navigate(['/kikirik/alarmas']);
    }, 100);
  }

}
