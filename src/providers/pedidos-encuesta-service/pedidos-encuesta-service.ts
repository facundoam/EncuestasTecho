import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the PedidosEncuestaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosEncuestaServiceProvider {

  private URL_GET_PEDIDOS: string = "https://api.us.apiconnect.ibmcloud.com/ariasmelaribmcom-dev/sb/api/PedidoEncuesta";


  constructor(private http: Http) {
    console.log('Hello PedidosEncuestaServiceProvider Provider');
  }

  getPedidosEncuestas(){
    return this.http.get(this.URL_GET_PEDIDOS)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error!");
  }

  private logResponse(res: Response){
    return console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }



}
