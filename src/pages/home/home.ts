import { Component } from '@angular/core';
import { PedidosEncuestaServiceProvider } from '../providers/pedidos-encuesta-service/pedidos-encuesta-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private pedidosService: PedidosEncuestaServiceProvider) {
    this.getPedidosEncuestas();
  }

  getPedidosEncuestas(){
    this.pedidosService.getPedidosEncuestas().subscribe(data => console.log(data));
  }

}
