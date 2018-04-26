import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderAction } from '../actions/OrderAction';

import { OrderPage } from '../order/order';
import { OrderModel } from '../model/OrderModel';
import { Storage } from '@ionic/storage';
import { OrdersModel } from '../model/OrdersModel';


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  ordersStorage: OrdersModel 

  selectedItem: any;
  icons: string[];
  orders: OrderModel[];

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.ordersStorage = new OrdersModel(storage)
    let action = navParams.get('action');
    
    this.orders = []  
  }

  ionViewWillEnter() {
    this.orders = []  
    this.loadOrdersFromDb();
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
    
    this.ordersStorage.saveOrders(this.orders)
    // console.debug(JSON.stringify(this.orders))
    this.navCtrl.push(OrderPage, {
      action: OrderAction.UPDATE_ORDER,
      order: order
    });
  }

  newOrder(event) {
    this.ordersStorage.saveOrders(this.orders)
    this.navCtrl.push(OrderPage, {
      action: OrderAction.NEW_ORDER
    });
  }

}
