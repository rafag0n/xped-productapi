import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@db:5555/appdb'; 

export default defineConfig({
  schema: "./src/model/orm", 
  out: "./infra/drizzle",
  dialect: "postgresql",
  dbCredentials: { url: databaseUrl }
});
