import { CustumerModel } from "./CustumerModel";
import { OrderEntryModel } from "./OrderEntryModel";

export class OrderModel {
    readonly id: number;
    
    date: Date;
    custumer: CustumerModel;
    orderEntries: OrderEntryModel[];

    constructor(custumer?: CustumerModel, id?: number) {
        if(custumer) {
            this.custumer = custumer;
        }
        else {
            this.custumer = new CustumerModel()
        }

        this.id = id;

        this.date = new Date();

        this.orderEntries = [];
    }

    static orderFromJsonParser(order) {
        let newCustumer: CustumerModel = new CustumerModel(order.custumer.name, order.custumer.id)
        console.debug(newCustumer)
        let newOrder: OrderModel = new OrderModel(newCustumer, order.id)

        for(let orderEntry of order.orderEntries) {
            
            newOrder.orderEntries.push(
                new OrderEntryModel(orderEntry.product, orderEntry.quantity, orderEntry.productId, orderEntry.id)
            )
            
        }

        return newOrder
    }
}