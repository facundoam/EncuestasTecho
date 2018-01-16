import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAgustoniAddPage } from './modal-agustoni-add';

@NgModule({
  declarations: [
    ModalAgustoniAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAgustoniAddPage),
  ],
})
export class ModalAgustoniAddPageModule {}
