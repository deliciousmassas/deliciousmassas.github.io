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

  custumers: string[] = this.loadCustumersFromDb();
  order: OrderModel;
  selected_date: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.order = navParams.get("order")
    console.debug(navParams.get("order"));

  }

  loadCustumersFromDb() {
    return ["c1", "c2", "c3"];
  }

  submitOrder(event, orderFilled) {
    console.debug(orderFilled)

    // if(!orderFilled.date) {
    //   orderFilled.date = new Date()
    // }

    this.navCtrl.push(OrdersPage, {
      order: orderFilled
    });
  }
}