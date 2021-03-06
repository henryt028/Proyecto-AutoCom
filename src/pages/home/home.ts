import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.items = afDB.list('perfiles').valueChanges();
  }
  //mapa
  public gotoMap(){
    this.navCtrl.push('MapaPage');
  }
  //perfil
  public gotoPerfil(){
    this.navCtrl.push('PerfilPage');
  }
  //login
  public gotoLogin(){
    this.navCtrl.push('LoginPage');
  }

}
