import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStudentPageRoutingModule } from './new-student-routing.module';

import { NewStudentPage } from './new-student.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewStudentPageRoutingModule
  ],
  declarations: [NewStudentPage]
})
export class NewStudentPageModule {}
