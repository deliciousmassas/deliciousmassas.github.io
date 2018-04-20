import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderAction } from '../actions/OrderAction';

import { OrderPage } from '../order/order';
import { OrderModel } from '../model/OrderModel';
import { OrderEntryModel } from '../model/OrderEntryModel';
import { ProductModel } from '../model/ProductModel';
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
    this.orders = this.loadOrdersFromDb();

    let action = navParams.get('action');
    let order = navParams.get('order');

    
    if(OrderAction.SUBMIT_ORDER == action) {
      this.pushOrder(order)
    }
  }

  pushOrder(order: OrderModel) {
    this.orders.push(order)
    this.storage.set('orders', JSON.stringify(this.orders))
  }

  // https://ionicframework.com/docs/storage/
  // load orders from past week
  loadOrdersFromDb() {
    console.debug(this.storage.get('orders'))
    let orders = this.storage.get('orders')
      .then((val) => {
        let json = JSON.parse(val)
        
        let jsonOrders = []
        for (let obj of json) {
          console.debug(obj)
          // let order: OrderModel = new OrderModel(obj.custumer, obj.id)
          // order.orderEntries = obj.orderEntries
          // jsonOrders.push(order)
        }
        // jsonOrders;
      })
      .catch(() => [])

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
