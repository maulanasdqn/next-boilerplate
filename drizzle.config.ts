import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./libs/database/schema.ts",
  out: "./libs/database/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
