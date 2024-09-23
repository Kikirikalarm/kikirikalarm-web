import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { SelectorDiasConcurrentesComponent } from './components/selector-dias-concurrentes/selector-dias-concurrentes.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    SelectorDiasConcurrentesComponent,
    OnlyNumbersDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    MaterialModule,
    RouterModule,
    IonicModule,
    FullCalendarModule,
    HttpClientModule,
    NgxMatTimepickerModule.setLocale('es-CO')
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    IonicModule,
    FullCalendarModule,
    NgxMatColorPickerModule,
    HttpClientModule,
    SelectorDiasConcurrentesComponent,
    NgxMatTimepickerModule,
    OnlyNumbersDirective
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
})
export class SharedModule { }
