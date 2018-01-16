import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';

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

  formAltaAgustoni: FormGroup;

  constructor(private navParams: NavParams, private view: ViewController, private formBuilder: FormBuilder,
  private pedidoService: PedidosEncuestaServiceProvider) {

    this.formAltaAgustoni = this.formBuilder.group({
      telefono: [''],
      nombreVoluntario: [''],
      nombreVecino: [''],
      direccion: [''],
      comentarios: ['']
    });
  }

  closeModalAddAgustoni(){
    this.view.dismiss();
  }

  getDatosUbicacion(){
    return this.navParams.get('dataUbi');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAgustoniAddPage');
  }

  altaAgustoni(valueData){


    console.log(valueData);
    console.log(this.getDatosUbicacion());


    let pedido = {
      comentarios: valueData.comentarios,
      direccion: valueData.direccion,
      fechaPedido: new Date(),
      nombreVoluntario: valueData.nombreVoluntario,
      nyaVecino: valueData.nombreVecino,
      telefono: valueData.telefono,
      imagenURL: 'noimg',
      idPedido: Math.random() * (99999 - 1) + 1,
      subBarrio: 'agustoni',
      puntoGeografico: {
        lat: this.getDatosUbicacion().latitud,
        lng: this.getDatosUbicacion().longitud
      }
    };

    console.log(pedido);
    
    this.pedidoService.postPedidoEncuesta(pedido);
    this.view.dismiss();
  }

}
