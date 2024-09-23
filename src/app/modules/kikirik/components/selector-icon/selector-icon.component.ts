import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconosService } from '../../services/iconos.service';
import { IconCategory, IconClass } from '../../models/icon.model';

@Component({
  selector: 'app-selector-icon',
  templateUrl: './selector-icon.component.html',
  styleUrls: ['./selector-icon.component.scss'],
})
export class SelectorIconComponent implements OnInit {
  iconosCategorie: IconCategory[] = [];
  filteredData: IconCategory[] = [];
  constructor(
    public dialogRef: MatDialogRef<SelectorIconComponent>,
    private iconosService: IconosService,
  ) { }

  ngOnInit() {
    this.iconosCategorie = this.iconosService.getIcons;
    this.filteredData = [this.iconosCategorie[0]];
    console.log(this.iconosCategorie);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    // Filtrar las categorías y los íconos
    this.filteredData = this.iconosCategorie
      .map(category => ({
        categoria: category.categoria,
        icons: category.icons.filter(icon =>
          icon.nombre.toLowerCase().includes(filterValue) ||
          icon.tags.some(tag => tag.toLowerCase().includes(filterValue))
        )
      }))
      .filter(category => category.icons.length > 0 ||
        category.categoria.toLowerCase().includes(filterValue));
  }

  closeSelection(icon: IconClass) {
    this.dialogRef.close(icon);
  }
}
