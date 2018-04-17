import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';
import { OrderModel } from '../../core/OrderModel';

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
    if(navParams.get('order')) {
      let order: OrderModel = navParams.get('order');
      this.orders.push(order);
    }

  }

  // load orders from past week
  loadOrdersFromDb() {
    return []
  }

  itemTapped(event, order) {
    // send to order page for editing
    this.navCtrl.push(OrderPage, {
      order: order
    });
  }

  loadProductsFromDb() {
    return [{name:"p1",quantity:0}, {name:"p2", quantity:0},
    {name:"p3", quantity:0}, {name:"p4", quantity:0}];
  }

  newOrder(event) {
    // create new order
    let newOrder: OrderModel = new OrderModel();
    newOrder.products = this.loadProductsFromDb()

    this.navCtrl.push(OrderPage, {
      order: newOrder
    });
  }
}
