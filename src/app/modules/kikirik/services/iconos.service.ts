import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IconCategory } from '../models/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconosService {

  private jsonUrl = 'assets/kikirik/data/icons-group-categories.json';
  private icons: IconCategory[] = [];

  constructor(private http: HttpClient) { }

  async getIconsService(): Promise<IconCategory[]> {
    let icons$ = this.http.get<IconCategory[]>(this.jsonUrl);
    this.icons = await lastValueFrom(icons$);;
    return this.icons;
  }

  public get getIcons(): IconCategory[] {
    return this.icons
  }


}
