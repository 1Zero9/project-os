import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// For scripts run from your own machine — never inside a Cloudflare Worker,
// so no Hyperdrive binding to reach through getCloudflareContext. Connects
// directly, the same way drizzle-kit's own migrate command does.
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });
