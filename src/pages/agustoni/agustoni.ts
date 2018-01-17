import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ModalController } from 'ionic-angular';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agustoni',
  templateUrl: 'agustoni.html'
})

export class AgustoniPage {

  listaPedidos = [];
  listaPedidosFiltrados = [];

  constructor(private alertCtrl: AlertController,
    private geolocation: Geolocation,
    private modal: ModalController,
    private pedidosService: PedidosEncuestaServiceProvider,
    private loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.getPedidosEncuestas();
    this.inicializarArrayDePedidosFiltrados();
  }

  getPedidosEncuestas() {
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    }); 

    this.pedidosService.getPedidosEncuestas().subscribe(datos => {
      loader.present();
      this.listaPedidos = datos.filter((pedido) => {
        if (pedido.subBarrio.includes("agustoni"))
          return true;
      });
    },
    error => console.log('Error from backend API', +error),
    () => {
      console.log("listo");
      this.inicializarArrayDePedidosFiltrados();
      setTimeout(() => {
        loader.dismiss();
      }, 1000);
    }
  );
  }

  openModalAdd() {
    let posOptions = { timeout: 10000, enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(posOptions).then((resp) => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      let datosUbicacion = {
        latitud: latitude,
        longitud: longitude
      };

      const modalAgustoniAdd = this.modal.create('ModalAgustoniAddPage', { dataUbi: datosUbicacion });
      modalAgustoniAdd.onDidDismiss(() => {
       this.getPedidosEncuestas();
      });
      modalAgustoniAdd.present();

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }



  getCurrentPosition() {
    let posOptions = { timeout: 10000, enableHighAccuracy: false };
    this.geolocation.getCurrentPosition(posOptions).then((resp) => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      let ubicacion = {
        latitud: latitude,
        longitud: longitude
      };

      return ubicacion;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  showAlert(lat, lng) {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'lat: ' + lat + '  lng:' + lng,
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
    this.listaPedidosFiltrados.reverse();
  }

}
