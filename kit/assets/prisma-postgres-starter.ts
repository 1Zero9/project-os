/**
 * Prisma client singleton, safe for Next.js dev hot-reload (without this, a
 * new PrismaClient gets created on every hot reload and exhausts Postgres
 * connections). From eolas (parked 2026-09-19), unchanged - this one was
 * already correct.
 *
 * Schema datasource block:
 *
 *   generator client {
 *     provider = "prisma-client-js"
 *   }
 *   datasource db {
 *     provider = "postgresql"
 *     url      = env("DATABASE_URL")
 *   }
 *
 * Then: npx prisma migrate dev --name init && npx prisma generate
 * Import the client everywhere as `import { prisma } from "./db"`.
 */

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
