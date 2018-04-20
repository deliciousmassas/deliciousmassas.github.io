import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderAction } from '../actions/OrderAction';

import { OrderPage } from '../order/order';
import { OrderModel } from '../model/OrderModel';
import { OrderEntryModel } from '../model/OrderEntryModel';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  selectedItem: any;
  icons: string[];
  orders: OrderModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orders = this.loadOrdersFromDb();

    let action = navParams.get('action');
    let order = navParams.get('order');

    
    if(OrderAction.SUBMIT_ORDER == action) {
      this.pushOrder(order)
    }
  }

  pushOrder(order: OrderModel) {
    this.orders.push(order);
  }

  // load orders from past week
  loadOrdersFromDb() {
    return []
  }


  itemTapped(event, order) {
    // send to order page for editing
    this.navCtrl.push(OrderPage, {
      action: OrderAction.UPDATE_ORDER,
      order: order
    });
  }

  newOrder(event) {
    this.navCtrl.push(OrderPage, {
      action: OrderAction.NEW_ORDER
    });
  }
}
