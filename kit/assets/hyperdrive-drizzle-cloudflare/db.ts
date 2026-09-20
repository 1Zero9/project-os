import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cache } from "react";
import { drizzle, type NodePgDatabase, type NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import type { PgTransaction } from "drizzle-orm/pg-core";
import type { ExtractTablesWithRelations } from "drizzle-orm";
import { Pool } from "pg";
import * as schema from "./schema";

// Same request-scoped-via-Hyperdrive shape as the removed Prisma version,
// but Drizzle's node-postgres driver has no query-engine binary or WASM
// step at all — it's why this replaced Prisma here in the first place.
export const getDb = cache(() => {
  const { env } = getCloudflareContext();
  const pool = new Pool({ connectionString: env.HYPERDRIVE.connectionString, max: 1 });
  return drizzle(pool, { schema });
});

export const getDbAsync = async () => {
  const { env } = await getCloudflareContext({ async: true });
  const pool = new Pool({ connectionString: env.HYPERDRIVE.connectionString, max: 1 });
  return drizzle(pool, { schema });
};

type Schema = typeof schema;

// Accepts either the top-level db or the `tx` handed to a db.transaction()
// callback — both support the same query builder methods, but Drizzle
// types them differently (a transaction has no `$client`), so a function
// like lib/items.ts's closeIfDone() that runs inside a transaction needs
// this wider type, not just NodePgDatabase.
export type Db =
  | NodePgDatabase<Schema>
  | PgTransaction<NodePgQueryResultHKT, Schema, ExtractTablesWithRelations<Schema>>;
