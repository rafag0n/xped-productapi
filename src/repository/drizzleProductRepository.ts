import { eq, count } from "drizzle-orm";
import { db } from "../lib/drizzle/index.js";
import { products } from "../model/orm";
import { ProductRepository } from "./productRepository";
import { ProductDetails } from "../model/valueObjects/productDetails";
import { Product } from "../model/entities/product";

export class DrizzleProductRepository implements ProductRepository {
    
    async findById(id: string): Promise<Product | null> {
        const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
        if (result.length === 0) return null;
        const row = result[0];
        const details = new ProductDetails(row.name, row.description, row.price, row.stockQuantity);
        return new Product(row.id, details);
    }

    async findByName(name: string): Promise<Product[]> {
        const result = await db.select().from(products).where(eq(products.name, name));
        return result.map(row => {
            const details = new ProductDetails(row.name, row.description, row.price, row.stockQuantity);
            return new Product(row.id, details);
        });
    }

    async findAll(): Promise<Product[]> {
        const result = await db.select().from(products);
        return result.map(row => {
            const details = new ProductDetails(row.name, row.description, row.price, row.stockQuantity);
            return new Product(row.id, details);
        });
    }

    async save(product: Product): Promise<Product> {
        await db.insert(products).values({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            stockQuantity: product.stockQuantity,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        });
        return product;
    }

    async update(id: string, product: Product): Promise<Product> {
        await db.update(products).set({
            name: product.name,
            description: product.description,
            price: product.price,
            stockQuantity: product.stockQuantity,
            updatedAt: new Date()
        }).where(eq(products.id, id));
        return product;
    }
    
    async delete(id: string): Promise<void> {
        await db.delete(products).where(eq(products.id, id));
    }

    async countAll(): Promise<number> {
        const result = await db
            .select({ count: count() })
            .from(products);
        return Number(result[0].count);
    }

}