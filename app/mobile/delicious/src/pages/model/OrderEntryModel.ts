export class OrderEntryModel {
    readonly id: number;
    readonly product: string;
    readonly productId: number;
    readonly quantity: number;

    constructor (product: string, quantity: number, productId?: number, id?:number) {
        this.product = product;
        this.quantity = quantity;
        this.id = id;
        this.productId = productId;
    }

}