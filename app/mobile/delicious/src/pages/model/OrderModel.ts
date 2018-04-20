import { CustumerModel } from "./CustumerModel";
import { OrderEntryModel } from "./OrderEntryModel";

export class OrderModel {
    readonly id: number;
    
    date: Date;
    custumer: CustumerModel;
    orderEntries: OrderEntryModel[];

    constructor(custumer?: CustumerModel, id?: number) {
        this.custumer = custumer;
        this.id = id;

        this.date = new Date();

        this.orderEntries = [];
    }
}