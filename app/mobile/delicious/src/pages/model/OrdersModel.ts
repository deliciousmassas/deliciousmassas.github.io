import { OrderModel } from "./OrderModel";
import { Storage } from '@ionic/storage';

export class OrdersModel {

    constructor(private storage: Storage) {
        this.storage = storage
     }

    saveOrder(newOrder) {
        let orders: OrderModel[] = []
        orders.push(newOrder)
        this.storage.get('orders')
            .then((val) => {
                let json = JSON.parse(val)
                for (let obj of json) {
                    let order: OrderModel = OrderModel.orderFromJsonParser(obj)
                    orders.push(order)
                }
                this.storage.set('orders', JSON.stringify(orders))
                console.debug(orders)
        })
        .catch((val) => {
            this.storage.set('orders', JSON.stringify([]))
        })
    }

    saveOrders(orders: OrderModel[]) {
        this.storage.set('orders', JSON.stringify(orders))
    }

}