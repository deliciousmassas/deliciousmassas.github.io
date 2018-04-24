import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderAction } from '../actions/OrderAction';

import { OrderPage } from '../order/order';
import { OrderModel } from '../model/OrderModel';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  selectedItem: any;
  icons: string[];
  orders: OrderModel[];

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    let action = navParams.get('action');
    let order = navParams.get('order');

    this.orders = []

    if(OrderAction.SUBMIT_ORDER == action) {
      this.pushOrder(order)
    }
    this.loadOrdersFromDb()
    this.storage.set('orders', JSON.stringify(this.orders))
  }

  pushOrder(order: OrderModel) {
    this.orders.push(order)
  }

  // https://ionicframework.com/docs/storage/
  // load orders from past week
  loadOrdersFromDb() {
    this.storage.get('orders')
      .then((val) => {
        let json = JSON.parse(val)
        for (let obj of json) {
          let order: OrderModel = OrderModel.orderFromJsonParser(obj)
          this.orders.push(order)
        }
      })
      .catch((val) => {
        this.storage.set('orders', JSON.stringify([]))
      })
  }

  itemTapped(event, order) {
    // send to order page for editing

    var index = this.orders.indexOf(order, 0)
    if (index > -1) {
      this.orders.splice(index, 1);
    }
    
    this.storage.set('orders', JSON.stringify(this.orders))
    // console.debug(JSON.stringify(this.orders))
    this.navCtrl.push(OrderPage, {
      action: OrderAction.UPDATE_ORDER,
      order: order
    });
  }

  newOrder(event) {
    this.storage.set('orders', JSON.stringify(this.orders))
    console.debug(JSON.stringify(this.orders))
    this.navCtrl.push(OrderPage, {
      action: OrderAction.NEW_ORDER
    });
  }
}
