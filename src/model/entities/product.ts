import { ProductDetails } from "../valueObjects/productDetails.js";

export class Product {
    id: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string | null | undefined;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(
        id: string,
        details: ProductDetails, 
    ) {
        this.id = id;
        this.name = details.name || "Unnamed Product";
        this.description = details.description;
        this.price = details.price;
        this.stockQuantity = details.stockQuantity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}