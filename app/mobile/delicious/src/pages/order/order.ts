import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderModel } from '../../core/OrderModel';
import { OrdersPage } from '../orders/orders';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  custumers: string[] = ["c1", "c2", "c3"];
  order: OrderModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.order = navParams.get("order")

    if(!this.order.products) {
      this.order.products = [{name:"p1",quantity:0}, {name:"p2", quantity:0},
                             {name:"p3", quantity:0}, {name:"p4", quantity:0}];
    }

    console.debug(navParams.get("order"));
    
  }

  submitOrder(event) {
    console.debug(this.order)

    if(!this.order.date) {
      this.order.date = new Date()
    }

    this.navCtrl.push(OrdersPage, {
      order: this.order
    });
  }

}