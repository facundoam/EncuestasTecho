import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'
import { MyApp } from './app.component';
import { PedidosEncuestaServiceProvider } from '../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Geolocation } from '@ionic-native/geolocation';
import { WelcomePage } from '../pages/welcome/welcome';
import { AgustoniPage } from '../pages/agustoni/agustoni';
import { LomitaPage } from "../pages/lomita/lomita";


@NgModule({
  declarations: [
    MyApp,
    AgustoniPage,
    WelcomePage,
    LomitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgustoniPage,
    WelcomePage,
    LomitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidosEncuestaServiceProvider,
    Geolocation
  ]
})
export class AppModule {}
