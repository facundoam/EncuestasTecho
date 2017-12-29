import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agustoni',
  templateUrl: 'agustoni.html'
})

export class AgustoniPage {

  listaPedidos = [];
  listaPedidosFiltrados = [];

  constructor(private alertCtrl: AlertController,
    private geolocation: Geolocation,
    private navParams: NavParams) {

  }

   ionViewDidLoad(){
     this.listaPedidos = this.navParams.get('listaPedidos');
     this.inicializarArrayDePedidosFiltrados();
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

  inicializarArrayDePedidosFiltrados() {
    this.listaPedidosFiltrados = this.listaPedidos.slice();
  }

  getPedidosFiltrados(ev: any) {
    this.inicializarArrayDePedidosFiltrados();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listaPedidosFiltrados = this.listaPedidosFiltrados.filter((pedido) => {
        return (pedido.nyaVecino.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
