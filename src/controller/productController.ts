import { Controller, Route, Get, Post, Put, Delete, Path, Body, Tags, Response } from "tsoa";
import { ProductService } from "../service/productService";
import { DrizzleProductRepository } from "../repository/drizzleProductRepository";
import { Product } from "../model/entities/product";
import { ProductDetails } from "../model/valueObjects/productDetails";

@Route("products")
@Tags("Products")
export class ProductController extends Controller {
    private readonly service: ProductService;

    constructor() {
        super();
        this.service = new ProductService(new DrizzleProductRepository());
    }

    @Get("{id}")
    @Response(404, "Product not found")
    public async getProductById(@Path() id: string): Promise<Product | null> {
        const product = await this.service.getProductById(id);
        if (!product) {
            this.setStatus(404);
            return { message: "Product not found" } as unknown as any;
        }
        return product;
    }

    @Get()
    public async getAllProducts(): Promise<Product[]> {
        return this.service.getAllProducts();
    }

    @Get("name/{name}")
    public async getProductsByName(@Path() name: string): Promise<Product[]> {
        return this.service.getProductsByName(name);
    }

    @Post()
    @Response(201, "Product created")
    public async createProduct(@Body() details: ProductDetails): Promise<Product> {
        return this.service.createProduct(details);
    }

    @Put("{id}")
    public async updateProduct(
        @Path() id: string,
        @Body() details: ProductDetails
    ): Promise<Product> {
        return this.service.updateProduct(id, details);
    }

    @Delete("{id}")
    @Response(204, "Product deleted")
    public async deleteProduct(@Path() id: string): Promise<void> {
        await this.service.deleteProduct(id);
    }

    @Get("count/all")
    public async countProducts(): Promise<number> {
        return this.service.countProducts();
    }
}