import "dotenv/config";
import { Pool } from "pg"; 
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL!}`;

// 1. Configurar o Pool do Postgres
const pool = new Pool({ connectionString });

// 2. Configurar o Adapter
const adapter = new PrismaPg(pool);

// 3. Instancia o prismaClient 
const prismaClient = new PrismaClient({
  adapter,
});

export default prismaClient;