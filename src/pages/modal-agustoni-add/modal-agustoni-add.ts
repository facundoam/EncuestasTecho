import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAgustoniAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-agustoni-add',
  templateUrl: 'modal-agustoni-add.html',
})
export class ModalAgustoniAddPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModalAddAgustoni(){
    this.view.dismiss();
  }

  ionViewWillLoad(){
    const datosUbicacion = this.navParams.get('dataUbi');
    console.log(datosUbicacion);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAgustoniAddPage');
  }

}
