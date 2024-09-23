import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './modules/login/services/login.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AlarmasService } from './modules/kikirik/services/alarmas.service';
import { MarcadorService } from './modules/kikirik/services/marcador.service';
import { IconosService } from './modules/kikirik/services/iconos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private alarmasService: AlarmasService,
    private marcadorService: MarcadorService,
    private IconosService: IconosService
  ) {
    this.registryIcons(iconRegistry, sanitizer);
    this.initializeApp();
  }

  ngOnInit() {
    const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    this.toggleMaterialTheme(isDarkTheme);
    this.validarStateLogin();
    this.obtenerData();
  }

  initializeApp() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleMaterialTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => {
      this.toggleMaterialTheme(mediaQuery.matches);
    });
  }

  toggleMaterialTheme(isDark: boolean) {
    const themeClass = isDark ? 'dark-theme' : 'light-theme';
    document.body.classList.add(themeClass);
    document.body.classList.remove(isDark ? 'light-theme' : 'dark-theme');
    localStorage.setItem('isDarkTheme', isDark.toString());
  }

  validarStateLogin() {
    const isLoggedIn = this.loginService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/kikirik']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  registryIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'google',
      sanitizer.bypassSecurityTrustResourceUrl('assets/kikirik/social-icons/google.svg')
    );
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/kikirik/social-icons/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'apple',
      sanitizer.bypassSecurityTrustResourceUrl('assets/kikirik/social-icons/apple.svg')
    );
  }

  async obtenerData() {
    await this.alarmasService.getAlarmasService();
    await this.marcadorService.getMarcadorService();
    await this.IconosService.getIconsService();
  }
}
