import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRowComponent } from './add-edit-row.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEditRowComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddEditRowComponent]
})
export class AddEditRowModule { }
