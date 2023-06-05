import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule
  ]
})
export class FormulariosModule { }
