import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

//https://scotch.io/tutorials/build-an-ionic-app-with-user-authentication

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
