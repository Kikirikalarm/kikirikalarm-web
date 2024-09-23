import { Injectable } from '@angular/core';
import { Marcador } from '../models/marcador.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcadorService {

  private jsonUrl = 'assets/kikirik/data/marcadores.json';
  private marcadores: Marcador[] = [];

  constructor(private http: HttpClient) { }

  async getMarcadorService(): Promise<Marcador[]> {
    let marcadores$ = this.http.get<Marcador[]>(this.jsonUrl);
    this.marcadores = await lastValueFrom(marcadores$);;
    return this.marcadores;
  }

  public get getMarcadores(): Marcador[] {
    return this.marcadores
  }

  public set setMarcadores(marcadores: Marcador[]) {
    this.marcadores = marcadores;
  }

  public set updateMarcador(marcador: Marcador) {
    let index = this.marcadores.findIndex(mar => mar.id === marcador.id);
    this.marcadores[index] = marcador;
  }

  public set eliminarMarcador(marcador: Marcador) {
    this.marcadores = this.marcadores.filter(mar => mar.id !== marcador.id);
  }

  public set agregarMarcador(marcador: Marcador) {
    marcador.id = this.lastIdMarcador + 1;
    this.marcadores.push(marcador);
  }

  private get lastIdMarcador(): number {
    let lastID = this.marcadores.sort((a, b) => a.id - b.id)[this.marcadores.length - 1];
    return lastID ? lastID.id : 0;
  }

}
