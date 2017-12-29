import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PedidosEncuestaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosEncuestaServiceProvider {

  private URL_GET_PEDIDOS: string = "https://api.us.apiconnect.ibmcloud.com/ariasmelaribmcom-dev/sb/api/PedidoEncuesta";


  constructor(private http: Http) {
    console.log('Provider de encuestas starteado.');
  }

  getPedidosEncuestas(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('x-ibm-client-id', 'e20f3d89-9525-4f01-a13b-6077efa75a59');
    headers.append('x-ibm-client-secret', 'yS4iO5xP3nC6qE5yW3yW7oV4aC4vB7jA3yO2eY4aL0hL0dT5wT');


    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.URL_GET_PEDIDOS,options)
    .map(res => res.json());
  }


}
