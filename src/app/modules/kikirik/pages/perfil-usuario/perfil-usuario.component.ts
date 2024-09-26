import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { OptionsConfirm } from 'src/app/shared/models/dialog-confirm-options.model';
import { DialogConfirmServiceService } from 'src/app/shared/services/dialog-confirm-service.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent  {

  constructor(
    private dialogConfirmServiceService: DialogConfirmServiceService,
    private LoginService: LoginService,
    private router: Router,
  ) { }

  async showDeleteAccountModal() {
    let options: OptionsConfirm = {
      tituloBtnConfirmar: 'Si',
      tituloBtnCancelar: 'No',
      width: '280px',
    }
    let confirmacion = await this.dialogConfirmServiceService.succesConfirmMessaje(
      '¿Esta seguro de eliminar la cuenta?<br>Este cambio es irreversible',
      options);
    console.log(confirmacion);
    if (confirmacion) {
      this.logout()
    }
  }

  private logout() {
    this.LoginService.logout();
    this.router.navigate(['/login']);
  }

}
