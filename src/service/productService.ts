import { Product } from "../model/entities/product";
import { ProductDetails } from "../model/valueObjects/productDetails";
import { ProductRepository } from "../repository/productRepository";

export class ProductService {
    constructor(private readonly repository: ProductRepository) {
        this.repository = repository;
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.repository.findById(id);
    }

    async getProductsByName(name: string): Promise<Product[]> {
        return this.repository.findByName(name);
    }

    async getAllProducts(): Promise<Product[]> {
        return this.repository.findAll();
    }

    async createProduct(details: ProductDetails): Promise<Product> {
        const newProduct = new Product(
            crypto.randomUUID(),
            details
        );
        return this.repository.save(newProduct);
    }
    
    async updateProduct(id: string, details: ProductDetails): Promise<Product> {
        const updatedProduct = new Product(id, details);
        return this.repository.update(id, updatedProduct);
    }

    async deleteProduct(id: string): Promise<void> {
        return this.repository.delete(id);
    }

    async countProducts(): Promise<number> {
        return this.repository.countAll();
    }
    
}