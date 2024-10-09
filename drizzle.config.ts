import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./config/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:VesNrPuJ7L6H@ep-aged-glitter-a4sz3jvc.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
  verbose: true,
  strict: true,
});
