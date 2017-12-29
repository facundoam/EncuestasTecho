import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgustoniPage } from '../agustoni/agustoni'
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';


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
  constructor(private pedidosService: PedidosEncuestaServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getPedidosEncuestas();
  }

  getPedidosEncuestas(){
    this.pedidosService.getPedidosEncuestas().subscribe(data => {
      this.listaPedidos = data;
    });
  }

  pushAgustoni(){
    this.navCtrl.push(AgustoniPage,{'listaPedidos' : this.listaPedidos.filter((pedido) => {
      if(pedido.nyaVecino.includes("agustoni"))
      return true;
    })
  });
  }




}
