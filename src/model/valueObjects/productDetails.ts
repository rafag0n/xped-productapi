export class ProductDetails {
    readonly name: string;
    readonly price: number;
    readonly stockQuantity: number;
    readonly description: string | undefined | null;

    constructor(
        name: string,
        description: string | undefined | null,
        price: number,
        stockQuantity: number
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
}
