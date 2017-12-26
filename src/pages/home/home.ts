import { Component } from '@angular/core';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaPedidos = [];

  constructor(private alertCtrl: AlertController, private pedidosService: PedidosEncuestaServiceProvider, private geolocation: Geolocation) {
    this.ionViewDidLoad();
  }

   ionViewDidLoad(){
     this.getPedidosEncuestas();
   }

  getCurrentPosition(){
    let posOptions = {timeout: 10000, enableHighAccuracy: false};
    this.geolocation.getCurrentPosition(posOptions).then((resp) => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      this.showAlert(latitude,longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  showAlert(lat,lng) {
   let alert = this.alertCtrl.create({
     title: 'New Friend!',
     subTitle: 'lat: ' + lat + '  lng:' + lng ,
     buttons: ['OK']
   });
   alert.present();
 }

  getPedidosEncuestas(){
    this.pedidosService.getPedidosEncuestas().subscribe(data => this.listaPedidos = data);
  }

}
