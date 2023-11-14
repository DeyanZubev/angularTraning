import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EosMatrixComponent } from './eos-matrix.component';
import { AddEditRowModule } from './modals/add-edit-row/add-edit-row.module';

import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    EosMatrixComponent
    
  ],
  imports: [
    CommonModule,
    AddEditRowModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [EosMatrixComponent]
})
export class EosMatrixModule { }
