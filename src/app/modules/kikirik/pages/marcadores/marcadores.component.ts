import { Component, OnInit } from '@angular/core';
import { MarcadorService } from '../../services/marcador.service';
import { Marcador } from '../../models/marcador.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss'],
})
export class MarcadoresComponent implements OnInit {
  marcadores: Marcador[] = [];
  mostrarCrearMarcador = false;
  marcadorEdit?: Marcador;

  constructor(
    private marcadorService: MarcadorService
  ) { }

  ngOnInit() {
    this.marcadores = this.marcadorService.getMarcadores;
  }

  mostrarCrearMarcadorEv(marcador?: Marcador) {
    this.mostrarCrearMarcador = false;
    if (marcador) {
      this.marcadorEdit = marcador;
    }else {
      this.marcadorEdit = undefined;
    }
    setTimeout(() => {
      this.mostrarCrearMarcador = true;
    }, 200);
  }

  marcadorUpdate() {
    this.marcadores = this.marcadorService.getMarcadores;
    this.mostrarCrearMarcador = false;
  }
}
