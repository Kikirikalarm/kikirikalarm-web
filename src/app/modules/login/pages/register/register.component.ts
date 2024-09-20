import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  formRegister = this.formRegisterInit();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private usuarioService: UserService
  ) { }

  formRegisterInit() {
    return new FormGroup({
      nombreUsuario: new FormControl('', [Validators.required]),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(''),
    });
  }

  registrarse() {
    let user = this.formRegister.value as User;
    sessionStorage.setItem('user-name', user.nombreUsuario!);
    this.usuarioService.setUser(user);
    this.loginService.login();
    this.router.navigate(['/kikirik']);
  }
}
