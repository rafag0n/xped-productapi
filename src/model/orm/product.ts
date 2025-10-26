import { 
    pgTable, 
    varchar, 
    integer, 
    numeric, 
    timestamp,
    uuid
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    price: numeric("price", { precision: 10, scale: 2, mode: "number" }).notNull(),
    stockQuantity: integer("stock_quantity").notNull(),
    description: varchar("description", { length: 1000 }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});