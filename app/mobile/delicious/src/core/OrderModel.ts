export class OrderModel {
    custumer: string;
    date: Date;
    products: Array<{name: string, quantity: number}> = [];
}