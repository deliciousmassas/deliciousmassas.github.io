export class OrderEntryModel {
    readonly id: number;
    readonly product: string;
    readonly quantity: number;

    constructor (product: string, quantity: number, id?:number) {
        this.product = product;
        this.quantity = quantity;
        this.id = id;
    }

}