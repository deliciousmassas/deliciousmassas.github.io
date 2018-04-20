import { CustumerModel } from "./CustumerModel";
import { OrderEntryModel } from "./OrderEntryModel";

export class OrderModel {
    readonly id: number;
    readonly custumer: CustumerModel;
    readonly products: Array<OrderEntryModel>;

    date: Date;

    constructor(custumer: CustumerModel, id?: number) {
        this.custumer = custumer;
        this.id = id;

        this.date = new Date();

        this.products = [];
    }
}