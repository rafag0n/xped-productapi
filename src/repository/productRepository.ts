import { Product } from "../model/entities/product";

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product[]>;
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<Product>;
  update(id: string, product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
  countAll(): Promise<number>;
}

