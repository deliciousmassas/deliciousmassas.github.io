import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderAction } from '../actions/OrderAction';
import { OrderModel } from '../model/OrderModel';
import { OrdersPage } from '../orders/orders';
import { CustumerModel } from '../model/CustumerModel';
import { OrderEntryModel } from '../model/OrderEntryModel';
import { ProductModel } from '../model/ProductModel';
import { Storage } from '@ionic/storage';


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
  readonly custumers: CustumerModel[] = this.loadCustumersFromDb();
  order: OrderModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let action = navParams.get('action')

    if(OrderAction.NEW_ORDER == action) {
      this.order = this.newOrder();
    }
    else if(OrderAction.UPDATE_ORDER == action) {
      this.order = navParams.get('order');
    }
  }

  onChange(id) {
    this.order.custumer = this.findCustumerById(id)
  }

  findCustumerById(id): CustumerModel {
    for(let custumer of this.custumers) {
      if(custumer.id == id) {
        return custumer
      }
    }
  }

  private newOrder() {
    let order = new OrderModel()
    let products = this.loadProductsFromDb()
    
    for(let product of products) {
      let orderEntry = new OrderEntryModel(product.name, 0, product.id)
      order.orderEntries.push(orderEntry)
    }

    return order

  }

  loadProductsFromDb() {
    return [
      new ProductModel("p1"),
      new ProductModel("p2"),
      new ProductModel("p3"),
      new ProductModel("p4")
    ]
  }

  loadCustumersFromDb() {
    return [new CustumerModel("c1",1), new CustumerModel("c2",2), new CustumerModel("c3",3)];
  }

  submitOrder(event, order) {
    console.debug(order)
    this.navCtrl.push(OrdersPage, {
      action: OrderAction.SUBMIT_ORDER,
      order: order
    });
  }
}