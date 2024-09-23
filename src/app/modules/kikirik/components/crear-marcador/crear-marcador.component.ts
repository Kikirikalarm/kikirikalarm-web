import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marcador } from '../../models/marcador.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectorIconComponent } from '../selector-icon/selector-icon.component';
import { MarcadorService } from '../../services/marcador.service';
import { DialogConfirmServiceService } from 'src/app/shared/services/dialog-confirm-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-marcador',
  templateUrl: './crear-marcador.component.html',
  styleUrls: ['./crear-marcador.component.scss'],
})
export class CrearMarcadorComponent implements OnInit {
  @Input() marcador?: Marcador;
  @Output() marcadorEvent = new EventEmitter<Marcador>();
  @Output() cancelarEvent = new EventEmitter<false>();

  formMarcador = this.formMarcadorInit();

  constructor(
    public dialog: MatDialog,
    private marcadorService: MarcadorService,
    private confirmDialog: DialogConfirmServiceService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    if (this.marcador) {
      this.formMarcador.patchValue(this.marcador);
    }
  }


  formMarcadorInit() {
    return new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl('', [Validators.required]),
      icono: new FormControl({ value: '', disabled: false }, [Validators.required]),
      color: new FormControl<any>({ value: '#d9d9d9', disabled: false }, [Validators.required]),
    });
  }

  public get titulo(): string {
    return this.marcador ? 'Editar marcador' : 'Crear marcador';
  }

  public get isEdit(): boolean {
    return !!this.marcador;
  }

  abrirSelectorIcon() {
    const dialogRef = this.dialog.open(SelectorIconComponent, {
      width: '447px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("result marcadores", result);
        this.formMarcador.get('icono')?.setValue(result.nombre);
      }
    });
  }

  public get nombreMarcador(): string {
    return this.formMarcador.controls.nombre.value || '';
  }

  guardarMarcador() {
    if (this.formMarcador.invalid) {
      return;
    }

    let marcadorForm = this.formMarcador.getRawValue();
    let marcador: Marcador = {
      id: marcadorForm.id!,
      nombre: marcadorForm.nombre!,
      icono: marcadorForm.icono!,
      color: marcadorForm.color!.hex ? `#${marcadorForm.color!.hex}` : marcadorForm.color
    }

    if (this.isEdit) {
      this.marcadorService.updateMarcador = marcador;
    } else {
      this.marcadorService.agregarMarcador = marcador;
    }
    this.marcadorEvent.emit(marcador);
  }

  cancelar() {
    console.log("entre al cancelar");
    this.cancelarEvent.emit(false);
  }

  async eliminarMarcador() {
    let result = await this.confirmDialog.succesConfirmMessaje('¿Está seguro que desea eliminar el marcador?');
    if (result) {
      this.marcadorService.eliminarMarcador = this.marcador!;
      this.snackBar.open('Se ha eliminado el marcador', '', { panelClass: 'snack-bar-propio', duration: 2000, verticalPosition: 'top', horizontalPosition: 'right' });
      this.marcadorEvent.emit(this.marcador!);
    }
  }

}
