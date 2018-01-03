import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgustoniPage } from '../agustoni/agustoni'
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { LomitaPage } from "../lomita/lomita";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {

  augstoniPage = AgustoniPage;
  listaPedidos = [];
  listaPedidosAgustoni = [];
  listaPedidosLomita = [];
  
  constructor(private pedidosService: PedidosEncuestaServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getPedidosEncuestas();
  }

  getPedidosEncuestas() {
    this.pedidosService.getPedidosEncuestas().subscribe(data => {
      this.listaPedidos = data;
      this.listaPedidosAgustoni = data.filter((pedido) => {
        if (pedido.subBarrio.includes("agustoni"))
          return true;
      });
      this.listaPedidosLomita = data.filter((pedido) => {
        if (pedido.subBarrio.includes("lomita"))
          return true;
      });
    });
  }

  pushAgustoni() {
    this.navCtrl.push(AgustoniPage, { 'listaPedidos': this.listaPedidosAgustoni });
  }

  pushLomita() {
    this.navCtrl.push(LomitaPage, { 'listaPedidos': this.listaPedidosLomita });
  }




}
