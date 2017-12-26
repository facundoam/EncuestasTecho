import { Component } from '@angular/core';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaPedidos = [];

  constructor(private pedidosService: PedidosEncuestaServiceProvider, private geolocation: Geolocation) {
    this.ionViewDidLoad();
  }

   ionViewDidLoad(){
     this.getPedidosEncuestas();
   }

  getCurrentPosition(){
    let posOptions = {timeout: 10000, enableHighAccuracy: false};
    this.geolocation.getCurrentPosition(posOptions).then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getPedidosEncuestas(){
    this.pedidosService.getPedidosEncuestas().subscribe(data => this.listaPedidos = data);
  }

}
